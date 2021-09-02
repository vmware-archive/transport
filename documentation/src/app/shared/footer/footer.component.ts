/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from '../../models/base.component';
import { VERSION } from '@vmw/transport-docs/environments/version';
import { BusStore, StoreStream } from '@vmw/transport';
import { FabricConnectionState } from '@vmw/transport/fabric.api';

@Component({
    selector: 'transport-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent extends BaseComponent implements OnInit, OnDestroy {
    public date = new Date().getFullYear();
    public version = VERSION;
    public buildTime = Date.parse(VERSION.time);

    public connectionState = 'Disconnected from broker';
    public connected = false;
    public connecting = false;
    public connectionFailed = false;
    public connectionStateStore: BusStore<boolean>;
    public connectionClass = 'label-warning';

    private connectionStateStream: StoreStream<boolean>;
    private disconnectStateStream: StoreStream<boolean>;

    constructor(private cd: ChangeDetectorRef) {
        super('FooterComponent');
    }

    private setConnected(): void {
        this.connected = true;
        this.connecting = false;
        this.connectionClass = 'label-success';
        this.connectionState = 'Connected to transport-bus.io';
        this.cd.detectChanges();
    }

    private setConnecting(): void {
        this.connected = false;
        this.connecting = true;
        this.connectionClass = 'label-warning';
        this.connectionState = 'Connecting to transport-bus.io';
        this.cd.detectChanges();
    }

    private setDisconnected(): void {
        this.connected = false;
        this.connecting = false;
        this.connectionClass = 'label-warning';
        this.connectionState = 'Disconnected from transport-bus.io';
        this.cd.detectChanges();
    }

    private setConnectError(): void {
        this.connected = false;
        this.connecting = false;
        this.connectionFailed = true;
        this.connectionClass = 'label-danger';
        this.connectionState = 'Unable to connect to transport-bus.io';
        this.cd.detectChanges();
    }

    ngOnDestroy(): void {}

    ngOnInit(): void {
        this.connectionStateStore = this.storeManager.getStore('connectionState');
        this.connecting = this.connectionStateStore.get('connecting');
        this.connected = this.connectionStateStore.get(FabricConnectionState.Connected);
        this.connectionFailed = this.connectionStateStore.get(FabricConnectionState.Failed);

        this.listenForStateChanges();

        if (this.connecting) {
            this.setConnecting();
        }

        if (this.connected) {
            this.setConnected();
        } else {
            this.setConnected();
        }

        if (this.connectionFailed) {
            this.setConnectError();
        }
        this.listenForStateChanges();
    }

    listenForStateChanges(): void {
        this.connectionStateStream = this.connectionStateStore.onChange(FabricConnectionState.Connected);
        this.connectionStateStream.subscribe((connected) => {
            if (connected) {
                this.setConnected();
            } else {
                this.setDisconnected();
            }
        });

        this.disconnectStateStream = this.connectionStateStore.onChange(FabricConnectionState.Failed);
        this.disconnectStateStream.subscribe(() => {
            this.setConnectError();
        });
    }
}
