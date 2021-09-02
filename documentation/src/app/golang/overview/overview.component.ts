/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { Component, OnInit } from '@angular/core';

import { HighlightService } from '@vmw/transport-docs/services/highlight.service';
import { goTerminalCommands, javaTerminalCommands, tsTerminalCommands } from '@vmw/transport-docs/shared/model';
import { TermCommand } from '@vmw/transport-docs/welcome/welcome.component';
import { BaseComponent } from '@vmw/transport-docs/base.component';

@Component({
    selector: 'transport-golang-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent extends BaseComponent implements OnInit {
    public goCommands: Array<TermCommand>;
    public highlighted = false;

    constructor(private highlightService: HighlightService) {
        super('OverviewComponent');
    }

    highlight() {
        this.highlightService.highlightAll();
    }

    ngOnInit(): void {
        this.goCommands = goTerminalCommands;
    }

    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    }
}
