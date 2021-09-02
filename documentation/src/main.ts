/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { BusUtil } from '@vmw/transport/util/bus.util';
import { LogLevel } from '@vmw/transport/log';
import { FabricConnectionState } from '@vmw/transport/fabric.api';
import { BusStore } from '@vmw/transport';
import { GeneralUtil } from '@vmw/transport/util/util';
import { FabricApiImpl } from '@vmw/transport/fabric/fabric';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
