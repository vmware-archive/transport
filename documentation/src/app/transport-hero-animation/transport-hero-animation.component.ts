/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { default as mina, default as Snap } from 'snapsvg-cjs';

import { BaseComponent } from '../models/base.component';

@Component({
    selector: 'transport-hero-animation',
    templateUrl: './transport-hero-animation.component.html',
    styleUrls: ['./transport-hero-animation.component.scss'],
})
export class TransportHeroAnimationComponent extends BaseComponent implements OnInit, OnDestroy {
    private intervalTimers: Array<number> = [];

    private MIN_ANIMATE = 1000;
    private MAX_ANIMATE = 2100;
    private MIN_DELAY = 4500;
    private MAX_DELAY = 7000;

    private MIN_STAGGER = 350;
    private MAX_STAGGER = 1200;

    public pinkPath1: any;
    public pinkPath2: any;
    public pinkPath3: any;
    public purplePath: any;
    public bluePath1: any;
    public bluePath2: any;
    public lightBluePath1: any;
    public lightBluePath2: any;
    public pinkMessage: any;
    public purpleMessage: any;
    public blueMessage: any;
    public lightBlueMessage: any;
    public hero: any;

    public bluePath1Interval: number;
    public bluePath2Interval: number;
    public lightBluePath1Interval: number;
    public lightBluePath2Interval: number;
    public pinkPath1Interval: number;
    public pinkPath2Interval: number;
    public pinkPath3Interval: number;
    public purplePathInterval: number;

    constructor(private ngZone: NgZone) {
        super('WelcomeComponent');
    }

    ngOnInit(): void {
        this.hero = Snap('#transport-hero-banner');
        if (this.hero != null) {
            this.pinkPath1 = this.hero.select('#pink-path-1');
            this.pinkPath2 = this.hero.select('#pink-path-2');
            this.pinkPath3 = this.hero.select('#pink-path-3');
            this.bluePath1 = this.hero.select('#blue-path-1');
            this.bluePath2 = this.hero.select('#blue-path-2');
            this.purplePath = this.hero.select('#purple-path');
            this.lightBluePath1 = this.hero.select('#light-blue-path-1');
            this.lightBluePath2 = this.hero.select('#light-blue-path-2');
            this.pinkMessage = this.hero.select('#pink-message');
            this.blueMessage = this.hero.select('#blue-message');
            this.purpleMessage = this.hero.select('#purple-message');
            this.lightBlueMessage = this.hero.select('#light-blue-message');

            // hide paths
            this.bluePath1.attr({
                display: 'none',
            });
            this.bluePath2.attr({
                display: 'none',
            });

            this.lightBluePath1.attr({
                display: 'none',
            });
            this.lightBluePath2.attr({
                display: 'none',
            });

            this.pinkPath1.attr({
                display: 'none',
            });

            this.pinkPath2.attr({
                display: 'none',
            });

            this.pinkPath3.attr({
                display: 'none',
            });

            this.purplePath.attr({
                display: 'none',
            });

            this.startAnimations();
        }
    }

    ngOnDestroy(): void {
        this.intervalTimers.forEach(clearInterval);
    }

    public startAnimations(): void {
        this.ngZone.runOutsideAngular(() => {
            this.pinkPath1Interval = setInterval(() => {
                this.runPinkLine1Message();
            }, 8000);

            this.pinkPath2Interval = setInterval(() => {
                this.runPinkLine2Message();
            }, this.getRandomValue(this.MIN_DELAY, this.MAX_DELAY));
            this.pinkPath3Interval = setInterval(() => {
                this.runPinkLine3Message();
            }, this.getRandomValue(this.MIN_DELAY, this.MAX_DELAY));
            this.bluePath1Interval = setInterval(() => {
                this.runBlueLine1Message();
            }, this.getRandomValue(this.MIN_DELAY, this.MAX_DELAY));
            this.bluePath2Interval = setInterval(() => {
                this.runBlueLine2Message();
            }, this.getRandomValue(this.MIN_DELAY, this.MAX_DELAY));
            this.lightBluePath1Interval = setInterval(() => {
                this.runLightBlueLine1Message();
            }, this.getRandomValue(this.MIN_DELAY, this.MAX_DELAY));
            this.lightBluePath2Interval = setInterval(() => {
                this.runLightBlueLine1Message();
            }, this.getRandomValue(this.MIN_DELAY, this.MAX_DELAY));
            this.purplePathInterval = setInterval(() => {
                this.runPurpleMessage();
            }, this.getRandomValue(this.MIN_DELAY, this.MAX_DELAY));

            this.runPinkLine1Message();

            this.intervalTimers.push(
                this.pinkPath1Interval,
                this.pinkPath2Interval,
                this.pinkPath3Interval,
                this.bluePath1Interval,
                this.bluePath2Interval,
                this.lightBluePath1Interval,
                this.lightBluePath2Interval,
                this.purplePathInterval
            );

            this.bus.api.tickEventLoop(() => {
                this.runPinkLine2Message();
            }, this.getRandomValue(this.MIN_STAGGER, this.MAX_STAGGER));

            this.bus.api.tickEventLoop(() => {
                this.runPinkLine3Message();
            }, this.getRandomValue(this.MIN_STAGGER, this.MAX_STAGGER));

            this.bus.api.tickEventLoop(() => {
                this.runBlueLine1Message();
                this.runPurpleMessage();
            }, this.getRandomValue(this.MIN_STAGGER, this.MAX_STAGGER));

            this.bus.api.tickEventLoop(() => {
                this.runBlueLine2Message();
            }, this.getRandomValue(this.MIN_STAGGER, this.MAX_STAGGER));

            this.bus.api.tickEventLoop(() => {
                this.runLightBlueLine1Message();
            }, this.getRandomValue(this.MIN_STAGGER, this.MAX_STAGGER));

            this.bus.api.tickEventLoop(() => {
                this.runLightBlueLine2Message();
            }, this.getRandomValue(this.MIN_STAGGER, this.MAX_STAGGER));
        });
    }

    public runPurpleMessage(): void {
        const msg = this.pinkMessage.clone().children()[0];
        this.runLine(msg, this.purplePath, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }

    public runBlueLine1Message(): void {
        const msg = this.lightBlueMessage.clone().children()[0];
        this.runLine(msg, this.bluePath1, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }

    public runLightBlueLine1Message(): void {
        const msg = this.blueMessage.clone().children()[0];
        this.runLine(msg, this.lightBluePath1, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }

    public runLightBlueLine2Message(): void {
        const msg = this.blueMessage.clone().children()[0];
        this.runLine(msg, this.lightBluePath2, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }

    public runBlueLine2Message(): void {
        const msg = this.lightBlueMessage.clone().children()[0];
        this.runLine(msg, this.bluePath2, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }

    public runPinkLine1Message(): void {
        const msg = this.purpleMessage.clone().children()[0];
        this.runLine(msg, this.pinkPath1, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }

    public runPinkLine2Message(): void {
        const msg = this.purpleMessage.clone().children()[0];
        this.runLine(msg, this.pinkPath2, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }

    public runPinkLine3Message(): void {
        const msg = this.purpleMessage.clone().children()[0];
        this.runLine(msg, this.pinkPath3, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }

    public getRandomValue(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    public runLine(msg, path, duration): void {
        msg.transform('t-685.99,108');
        Snap.animate(
            0,
            Snap.path.getTotalLength(path),
            (l) => {
                const dot = path.getPointAtLength(l);
                msg.attr({
                    cx: dot.x,
                    cy: dot.y,
                });
            },
            duration,
            mina.easeinout
        );
    }
}
