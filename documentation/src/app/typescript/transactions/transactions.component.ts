/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { AbstractBase } from '@vmw/transport/core';
import { HighlightService } from '@vmw/transport-docs/services/highlight.service';

@Component({
    selector: 'transport-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent extends AbstractBase implements OnInit, AfterViewChecked {
    constructor(private highlightService: HighlightService) {
        super('TransactionsComponent');
    }
    public highlighted = false;

    ngOnInit() {}

    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    }
}
