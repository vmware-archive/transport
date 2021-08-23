/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */


import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {AbstractBase} from "@vmw/transport/core";
import {HighlightService} from "@vmw/transport-docs/services/highlight.service";

@Component({
    selector: 'transport-broker-overview',
    templateUrl: './broker-overview.component.html',
    styleUrls: ['./broker-overview.component.scss']
})
export class BrokerOverviewComponent extends AbstractBase implements OnInit, AfterViewChecked {
    constructor(private highlightService: HighlightService) {
        super('BrokerOverviewComponent')
    }

    public highlighted = false;

    ngOnInit() {
    }

    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    }
}


