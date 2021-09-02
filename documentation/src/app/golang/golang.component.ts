/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'transport-golang',
    templateUrl: './golang.component.html',
    styleUrls: ['./golang.component.scss'],
})
export class GolangComponent implements OnInit {
    @ViewChild('mainContent')
    private mainContentDiv!: ElementRef<HTMLElement>;

    constructor() {}

    ngOnInit(): void {}

    onActivate(_event: any): void {
        // Scrolling back to the top
        // Reference: https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click/48048822
        if (this.mainContentDiv) {
            this.mainContentDiv.nativeElement.scrollTop = 0;
        }
    }
}
