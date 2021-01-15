/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {JavaRoutingModule} from './java-routing.module';
import {OverviewComponent} from './overview/overview.component';
import {JavaComponent} from './java.component';
import {SharedModule} from "@vmw/transport-docs/shared/shared.module";
import {ClarityModule} from "@clr/angular";
import { ImportingComponent } from './importing/importing.component';
import { InitializingComponent } from './initializing/initializing.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ConfiguringComponent } from './configuring/configuring.component';
import { BuildingServicesComponent } from './building-services/building-services.component';
import { PrivateChannelsComponent } from './private-channels/private-channels.component';
import { MessagingComponent } from './messaging/messaging.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { LoggingComponent } from './logging/logging.component';
import { RestComponent } from './rest/rest.component';
import { AbstractionsComponent } from './abstractions/abstractions.component';


@NgModule({
    declarations: [OverviewComponent, JavaComponent, ImportingComponent, InitializingComponent, HelloWorldComponent, ConfiguringComponent, BuildingServicesComponent, PrivateChannelsComponent, MessagingComponent, TransactionsComponent, LoggingComponent, RestComponent, AbstractionsComponent],
    imports: [
        CommonModule,
        SharedModule,
        CommonModule,
        ClarityModule,
        JavaRoutingModule
    ]
})
export class JavaModule {
}
