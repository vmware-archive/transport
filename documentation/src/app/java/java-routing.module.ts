/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavaComponent } from '@vmw/transport-docs/java/java.component';
import { OverviewComponent } from '@vmw/transport-docs/java/overview/overview.component';
import { ImportingComponent } from '@vmw/transport-docs/java/importing/importing.component';
import { InitializingComponent } from '@vmw/transport-docs/java/initializing/initializing.component';
import { HelloWorldComponent } from '@vmw/transport-docs/java/hello-world/hello-world.component';
import { ConfiguringComponent } from '@vmw/transport-docs/java/configuring/configuring.component';
import { BuildingServicesComponent } from '@vmw/transport-docs/java/building-services/building-services.component';
import { MessagingComponent } from '@vmw/transport-docs/java/messaging/messaging.component';
import { PrivateChannelsComponent } from '@vmw/transport-docs/java/private-channels/private-channels.component';
import { TransactionsComponent } from '@vmw/transport-docs/java/transactions/transactions.component';
import { LoggingComponent } from '@vmw/transport-docs/java/logging/logging.component';
import { RestComponent } from '@vmw/transport-docs/java/rest/rest.component';
import { AbstractionsComponent } from '@vmw/transport-docs/java/abstractions/abstractions.component';

const routes: Routes = [
    {
        path: '',
        component: JavaComponent,
        children: [
            { path: '', component: OverviewComponent },
            { path: 'overview', component: OverviewComponent },
            { path: 'importing', component: ImportingComponent },
            { path: 'configuring', component: ConfiguringComponent },
            { path: 'initializing', component: InitializingComponent },
            { path: 'hello-world', component: HelloWorldComponent },
            { path: 'building-services', component: BuildingServicesComponent },
            { path: 'messaging', component: MessagingComponent },
            { path: 'private-channels', component: PrivateChannelsComponent },
            { path: 'transactions', component: TransactionsComponent },
            { path: 'logging', component: LoggingComponent },
            { path: 'rest', component: RestComponent },
            { path: 'abstractions', component: AbstractionsComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class JavaRoutingModule {}
