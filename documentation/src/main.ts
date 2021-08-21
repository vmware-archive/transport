/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {BusUtil} from "@vmw/transport/util/bus.util";
import {LogLevel} from "@vmw/transport/log";
import {FabricConnectionState} from "@vmw/transport/fabric.api";
import {BusStore} from "@vmw/transport";
import {GeneralUtil} from "@vmw/transport/util/util";

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

const bus = BusUtil.bootBusWithOptions(LogLevel.Debug, false, true);

// Called when connected to broker
const connectedHandler = (sessionId: string) => {
    bus.logger.info(`Connected to Broker with sessionId ${sessionId}`, 'main.ts');
};

// Called when disconnected.
const disconnectedHandler = () => {
    bus.logger.info('Disconnected from Broker.', 'main.ts');
};

let connectionStore: BusStore<boolean>;

// Create state stores
function createStores() {

    let state: Map<string, boolean> = new Map();
    state.set('connected', false)
    state.set('connecting', false)
    state.set('failed', false)
    connectionStore = bus.stores.createStore('connectionState', state);
    connectionStore.initialize();
}

createStores();

// Connect to Broker.
bus.fabric.connect(connectedHandler, disconnectedHandler, 'transport-bus.io', 443, '/ws', true);
connectionStore.put('connecting', true, null);

// listen for connection state changes
bus.fabric.whenConnectionStateChanges(GeneralUtil.getFabricConnectionString('transport-bus.io', 443, '/ws'))
    .subscribe(
        (stateChange: FabricConnectionState) => {
            switch (stateChange) {
                case FabricConnectionState.Connected:
                    connectionStore.put('connected', true, null);
                    connectionStore.put('connecting', false, null);
                    break;

                case FabricConnectionState.Disconnected:
                    connectionStore.put('connected', false, null);
                    connectionStore.put('connecting', false, null);
                    break;

                case FabricConnectionState.Failed:
                    connectionStore.put('failed', true, null);
                    connectionStore.put('connecting', false, null);
                    break;
            }
        }
    );
