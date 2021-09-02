/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { Component, NgZone } from '@angular/core';

import { BusStore, EventBus } from '@vmw/transport';
import { FabricConnectionState } from '@vmw/transport/fabric.api';
import { LogLevel } from '@vmw/transport/log';
import { BusUtil } from '@vmw/transport/util/bus.util';
import { GeneralUtil } from '@vmw/transport/util/util';

// Called when connected to broker
const connectedHandler = (sessionId: string) => {
    BusUtil.getBusInstance().logger.info(`Connected to Broker with sessionId ${sessionId}`, 'main.ts');
};

// Called when disconnected.
const disconnectedHandler = () => {
    BusUtil.getBusInstance().logger.info('Disconnected from Broker.', 'main.ts');
};

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    private connectionStore: BusStore<any>;

    constructor(private ngZone: NgZone) {
        this.initBus();
        this.createStores();
        this.connectToFabric();
    }

    initBus(): void {
        const bus = BusUtil.bootBusWithOptions(LogLevel.Debug, false, true);
        bus.setNgZoneRef(this.ngZone);
    }

    connectToFabric(): void {
        const bus: EventBus = BusUtil.getBusInstance();
        // Connect to Broker.
        bus.fabric.connect(connectedHandler, disconnectedHandler, 'transport-bus.io', 443, '/ws', true);
        this.connectionStore.put('connecting', true, null);

        // listen for connection state changes
        bus.fabric
            .whenConnectionStateChanges(GeneralUtil.getFabricConnectionString('transport-bus.io', 443, '/ws'))
            .subscribe((stateChange: FabricConnectionState) => {
                switch (stateChange) {
                    case FabricConnectionState.Connected:
                        this.connectionStore.put('connected', true, null);
                        this.connectionStore.put('connecting', false, null);
                        break;

                    case FabricConnectionState.Disconnected:
                        this.connectionStore.put('connected', false, null);
                        this.connectionStore.put('connecting', false, null);
                        break;

                    case FabricConnectionState.Failed:
                        this.connectionStore.put('failed', true, null);
                        this.connectionStore.put('connecting', false, null);
                        break;
                }
            });
    }

    createStores(): void {
        const state: Map<string, boolean> = new Map();
        state.set('connected', false);
        state.set('connecting', false);
        state.set('failed', false);
        this.connectionStore = BusUtil.getBusInstance().stores.createStore('connectionState', state);
        this.connectionStore.initialize();
    }
    title = 'documentation';
}
