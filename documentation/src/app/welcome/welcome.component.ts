/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { AfterViewChecked, Component, OnChanges, OnInit } from '@angular/core';
import { BaseComponent } from '../models/base.component';
import { HighlightService } from '@vmw/transport-docs/services/highlight.service';
import { goTerminalCommands, javaTerminalCommands, tsTerminalCommands } from '@vmw/transport-docs/shared/model';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent extends BaseComponent implements OnInit, AfterViewChecked {
    public goCommands: Array<TermCommand>;
    public javaCommands: Array<TermCommand>;
    public tsCommands: Array<TermCommand>;
    public highlighted = false;

    constructor(private highlightService: HighlightService) {
        super('WelcomeComponent');
    }

    highlight() {
        this.highlightService.highlightAll();
    }

    ngOnInit(): void {
        this.goCommands = goTerminalCommands;
        this.tsCommands = tsTerminalCommands;
        this.javaCommands = javaTerminalCommands;
    }

    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    }
}

export interface TermCommand {
    title: string;
    command: string;
    notes: string;
}
