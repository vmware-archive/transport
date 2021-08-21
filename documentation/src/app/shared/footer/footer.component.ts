/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../models/base.component';
import {VERSION} from '@vmw/transport-docs/environments/version';
import {BusStore} from '@vmw/transport';

@Component({
    selector: 'transport-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BaseComponent implements OnInit {

    public date = new Date().getFullYear();
    public version = VERSION;
    public buildTime = Date.parse(VERSION.time);

    public connectionState = 'Disconnected from broker';
    public connected = false;
    public connecting = false;
    public connectionFailed = false;
    public connectionStateStore: BusStore<boolean>;
    public connectionClass = 'label-warning';

    constructor(private cd: ChangeDetectorRef) {
        super('FooterComponent');
    }

    private setConnected(): void {
        this.connected = true;
        this.connecting = false;
        this.connectionClass = 'label-success';
        this.connectionState = 'Connected to broker';
        this.cd.detectChanges();
    }

    private setDisconnected(): void {
        this.connected = false;
        this.connecting = false;
        this.connectionClass = 'label-warning';
        this.connectionState = 'Disconnected from broker';
        this.cd.detectChanges();
    }

    private setConnectError(): void {
        this.connected = false;
        this.connecting = false;
        this.connectionFailed = true;
        this.connectionClass = 'label-danger';
        this.connectionState = 'Unable to connect to broker';
        this.cd.detectChanges();
    }

    ngOnInit(): void {
        this.connectionStateStore = this.storeManager.getStore('connectionState');
        this.connecting = this.connectionStateStore.get('connecting');

        if (this.connecting) {
            this.connectionClass = 'label-info';
            this.connectionState = 'Connecting to broker...';
        }

        this.connectionStateStore.onChange('connected').subscribe(
            (connected) => {
               if (connected) {
                   this.setConnected();
               } else {
                   this.setDisconnected();
               }
            }
        );
        this.connectionStateStore.onChange('failed').subscribe(
            (failed) => {
                this.setConnectError()
            }
        );
    }

}
