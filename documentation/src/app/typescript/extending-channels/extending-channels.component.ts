/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */


import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {HighlightService} from "@vmw/transport-docs/services/highlight.service";
import {AbstractBase} from "@vmw/transport/core";

@Component({
    selector: 'transport-extending-channels',
    templateUrl: './extending-channels.component.html',
    styleUrls: ['./extending-channels.component.scss']
})
export class ExtendingChannelsComponent extends AbstractBase implements OnInit, AfterViewChecked {
    constructor(private highlightService: HighlightService) {
        super('ExtendingChannelsComponent')
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
