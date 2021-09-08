/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { concat, EMPTY, fromEvent, interval, Observable, of, Subscription, timer } from 'rxjs';
import { repeat, switchMapTo, takeWhile, tap, delay } from 'rxjs/operators';

@Component({
    selector: 'transport-animated-console',
    templateUrl: './animated-console.component.html',
    styleUrls: ['./animated-console.component.scss'],
})
export class AnimatedConsoleComponent implements OnInit, OnDestroy {
    public static readonly CARET_PROGRESSION_INTERVAL = 50;
    public static readonly EXECUTION_DELAY = 300;
    public static readonly ANIMATION_RESET_INTERVAL = 3000;
    public static readonly COPY_ANIMATION_RESET_INTERVAL = 1500;

    // inputCommand is the command that needs to be animated
    @Input()
    public inputCommand: string;

    // consoleMinHeight defines the minimum height of the console body so it prevents the rest of the content
    // below it from moving according to the console body changing in height
    @Input()
    public consoleMinHeight: string;

    // console theme holds a list of classes CSS styling. currently the following options are available:
    // look and feel:
    // - blue: enables blue color theme. if omitted, it defaults to the gray/black theme
    // operation system:
    // - windows: use the Windows-style title bar
    // - macOS: use the macOS-style title bar
    @Input()
    public consoleTheme = 'blue macOS';

    @Input()
    public delay: number;

    @Input()
    public loopAnimation = false;

    @Input()
    public disableAnimation = false;

    @Input()
    public disableCommandOutput = false;

    @Input()
    public interactiveMode = false;

    @Input()
    public cmdOutputObservable: Observable<string> = of('');

    @Input()
    public helperTxt: string;

    @Output()
    public cmdExecutionComplete: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('cmdInputBox', { read: ElementRef })
    public cmdInputBox: ElementRef;

    public commandExecuted: boolean;
    public display: string;
    public cmdOutput: string[] = [];
    public copiedToClipboard: boolean;
    private autotypeSubscription: Subscription;

    constructor(private renderer: Renderer2, private elRef: ElementRef) {
        this.display = '';
    }

    // set minimum height if specified by the user through [consoleMinHeight] input parameter. then proceed to
    // set the terminal to either interactive mode or autotype mode based on [interactiveConsole].
    ngOnInit(): void {
        this.renderer.setStyle(this.elRef.nativeElement.querySelector('.console-body'), 'min-height', this.consoleMinHeight || 'auto');

        if (this.interactiveMode) {
            this.interact();
        } else {
            // if disableAnimation flag is enabled we project inputCommand into display as static text
            if (this.disableAnimation) {
                this.display = this.inputCommand;
            } else {
                this.autotype(this.loopAnimation);
            }
        }
    }

    ngOnDestroy(): void {
        if (this.autotypeSubscription) {
            this.autotypeSubscription.unsubscribe();
        }
    }

    // interact will set up an event listener to focus on the text input box when clicked anywhere inside the
    // component so it creates an illusion of typing in a real terminal
    interact(): void {
        const inputFocusObs = fromEvent(this.elRef.nativeElement, 'mouseup');
        inputFocusObs.subscribe(() => {
            this.cmdInputBox.nativeElement.focus();
        });
    }

    // executeLiveCommand will simulate running a live command and printing out its output onto the terminal.
    // this is done through liveCmdExecutionObservable which is an observable of string type. while this observable
    // could be used to simulate executing a command, it could be used for live code execution by hooking it up with an
    // eve platform's channel so that every output log streamed from the websocket could be relayed to the observable.
    executeLiveCommand(): void {
        // clear the output first
        this.cmdOutput = [];

        // if command input is empty, do nothing
        if (!this.cmdInputBox.nativeElement.value.trim()) {
            return;
        }

        // execute the provided function that invokes the command in the backend.
        this.cmdOutput = [];
        this.cmdOutputObservable.subscribe(
            (line: string) => {
                this.cmdOutput.push(line);
            },
            (err) => console.error(err),
            () => {
                this.cmdExecutionComplete.emit(this.cmdOutput);
            }
        );
    }

    // autotype simulates typing of inputCommand character by character into this.display. once the command has been
    // completely typed, a little delay will ensue before showing the command outputs that were given as ng-content
    // content by the user which is 100% customizable. once the output has been printed out, if loop boolean value is
    // set to true, the output will be cleared and the typing animation will start from beginning after a preset interval.
    autotype(loop: boolean = false): Subscription {
        this.display = '';

        const typerObs = interval(AnimatedConsoleComponent.CARET_PROGRESSION_INTERVAL)
            .pipe(takeWhile((v) => v < this.inputCommand.length))
            .pipe(delay(this.delay));

        const outputsObs = timer(AnimatedConsoleComponent.EXECUTION_DELAY).pipe(
            switchMapTo(this.cmdOutputObservable),
            tap((line) => {
                this.cmdOutput.push(line);
                this.commandExecuted = true;
            }),
            switchMapTo(EMPTY)
        );

        const resetObs = timer(AnimatedConsoleComponent.ANIMATION_RESET_INTERVAL).pipe(
            tap(() => {
                if (loop) {
                    this.commandExecuted = false;
                    this.cmdOutput = [];
                }
            }),
            switchMapTo(EMPTY)
        );

        this.autotypeSubscription = concat(typerObs, outputsObs, resetObs)
            .pipe(repeat(loop ? -1 : 1))
            .subscribe((v) => {
                if (this.display.length === this.inputCommand.length) {
                    this.display = '';
                }
                this.display += this.inputCommand[v];
            });

        return this.autotypeSubscription;
    }

    copyToClipboard(): void {
        const start = this.elRef.nativeElement.querySelector('div.console-body .console-prompt:not(.comment)');
        const end = this.elRef.nativeElement.querySelector('div.console-body .console-prompt:last-of-type');
        const range = new Range();
        window.getSelection().removeAllRanges();
        range.setStartBefore(start);
        range.setEndAfter(end);
        window.getSelection().addRange(range);

        if (window.getSelection().toString().length > 0) {
            this.copiedToClipboard = true;
            document.execCommand('copy');

            setTimeout(() => {
                this.copiedToClipboard = false;
            }, AnimatedConsoleComponent.COPY_ANIMATION_RESET_INTERVAL);
        }
    }
}
