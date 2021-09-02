/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@vmw/transport-docs/base.component';
import { TermCommand } from '@vmw/transport-docs/welcome/welcome.component';
import { HighlightService } from '@vmw/transport-docs/services/highlight.service';
import { javaTerminalCommands } from '@vmw/transport-docs/shared/model';

@Component({
    selector: 'transport-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent extends BaseComponent implements OnInit {
    public javaCommands: Array<TermCommand>;
    public highlighted = false;

    constructor(private highlightService: HighlightService) {
        super('OverviewComponent');
    }

    highlight() {
        this.highlightService.highlightAll();
    }

    ngOnInit(): void {
        this.javaCommands = javaTerminalCommands;
    }

    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    }
}
