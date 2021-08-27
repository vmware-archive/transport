/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */


import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TypescriptComponent} from '@vmw/transport-docs/typescript/typescript.component';
import {OverviewComponent} from '@vmw/transport-docs/typescript/overview/overview.component';
import {ImportingComponent} from "@vmw/transport-docs/typescript/importing/importing.component";
import {InitializingComponent} from "@vmw/transport-docs/typescript/initializing/initializing.component";
import {HelloWorldComponent} from "@vmw/transport-docs/typescript/hello-world/hello-world.component";
import {BuildingServicesComponent} from "@vmw/transport-docs/typescript/building-services/building-services.component";
import {CallingServicesComponent} from "@vmw/transport-docs/typescript/calling-services/calling-services.component";
import {AdvancedMessagingComponent} from "@vmw/transport-docs/typescript/advanced-messaging/advanced-messaging.component";
import {TransactionsComponent} from "@vmw/transport-docs/typescript/transactions/transactions.component";
import {LoggingComponent} from "@vmw/transport-docs/typescript/logging/logging.component";
import {BrokerOverviewComponent} from "@vmw/transport-docs/typescript/broker-overview/broker-overview.component";
import {ConnectingBrokerComponent} from "@vmw/transport-docs/typescript/connecting-broker/connecting-broker.component";
import {MultipleBrokersComponent} from "@vmw/transport-docs/typescript/multiple-brokers/multiple-brokers.component";
import {ExtendingChannelsComponent} from "@vmw/transport-docs/typescript/extending-channels/extending-channels.component";
import {StoreBasicsComponent} from "@vmw/transport-docs/typescript/store-basics/store-basics.component";
import {StoreAdvancedComponent} from "@vmw/transport-docs/typescript/store-advanced/store-advanced.component";
import {IframesComponent} from "@vmw/transport-docs/typescript/iframes/iframes.component";
import {AbstractionsComponent} from "@vmw/transport-docs/typescript/abstractions/abstractions.component";
import {ImportingAngularComponent} from "@vmw/transport-docs/typescript/importing-angular/importing-angular.component";
import {ImportingReactComponent} from "@vmw/transport-docs/typescript/importing-react/importing-react.component";
import {ImportingUmdComponent} from "@vmw/transport-docs/typescript/importing-umd/importing-umd.component";
import {PingPongComponent} from "@vmw/transport-docs/typescript/examples/ping-pong/ping-pong.component";
import {StockTickerComponent} from "@vmw/transport-docs/typescript/examples/stock-ticker/stock-ticker.component";
import {SimpleStreamComponent} from "@vmw/transport-docs/typescript/examples/simple-stream/simple-stream.component";
import {JokeComponent} from "@vmw/transport-docs/typescript/examples/joke/joke.component";
import {ChangelogComponent} from "@vmw/transport-docs/typescript/changelog/changelog.component";

const routes: Routes = [
    {
        path: '',
        component: TypescriptComponent,
        children: [
            {path: '', component: OverviewComponent},
            {path: 'overview', component: OverviewComponent},
            {path: 'importing', component: ImportingComponent},
            {path: 'importing-angular', component: ImportingAngularComponent},
            {path: 'importing-umd', component: ImportingUmdComponent},
            {path: 'importing-react', component: ImportingReactComponent},
            {path: 'initializing', component: InitializingComponent},
            {path: 'hello-world', component: HelloWorldComponent},
            {path: 'building-services', component: BuildingServicesComponent},
            {path: 'calling-services', component: CallingServicesComponent},
            {path: 'advanced-messaging', component: AdvancedMessagingComponent},
            {path: 'transactions', component: TransactionsComponent},
            {path: 'logging', component: LoggingComponent},
            {path: 'broker-overview', component: BrokerOverviewComponent},
            {path: 'connecting-broker', component: ConnectingBrokerComponent},
            {path: 'multiple-brokers', component: MultipleBrokersComponent},
            {path: 'extending-channels', component: ExtendingChannelsComponent},
            {path: 'store-basics', component: StoreBasicsComponent},
            {path: 'store-advanced', component: StoreAdvancedComponent},
            {path: 'iframes', component: IframesComponent},
            {path: 'abstractions', component: AbstractionsComponent},
            {path: 'changelog', component: ChangelogComponent},
            {path: 'examples', component: PingPongComponent},
            {path: 'examples/ping-pong', component: PingPongComponent},
            {path: 'examples/stock-ticker', component: StockTickerComponent},
            {path: 'examples/simple-stream', component: SimpleStreamComponent},
            {path: 'examples/joke-service', component: JokeComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TypescriptRoutingModule {
}
