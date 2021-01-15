/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../../models/base.component';
import {TermCommand} from '../model';

@Component({
    selector: 'transport-quickstart',
    templateUrl: './quickstart.component.html',
    styleUrls: ['./quickstart.component.scss']
})
export class QuickstartComponent extends BaseComponent implements OnInit {
    @Input() commands: Array<TermCommand>;

    constructor() {
        super('QuickStartComponent');
    }

    ngOnInit(): void {

    }

}
