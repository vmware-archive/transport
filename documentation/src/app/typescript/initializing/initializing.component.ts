/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { AfterViewChecked, Component, OnInit } from '@angular/core';

import { HighlightService } from '@vmw/transport-docs/services/highlight.service';

@Component({
    selector: 'transport-initializing',
    templateUrl: './initializing.component.html',
    styleUrls: ['./initializing.component.scss'],
})
export class InitializingComponent implements OnInit, AfterViewChecked {
    constructor(private highlightService: HighlightService) {}

    public highlighted = false;

    ngOnInit() {}

    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    }
}
