/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */


import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypescriptRoutingModule} from './typescript-routing.module';
import {TypescriptComponent} from './typescript.component';
import {SharedModule} from '../shared/shared.module';
import {ClarityModule} from '@clr/angular';
import {OverviewComponent} from './overview/overview.component';
import {ImportingComponent } from './importing/importing.component';
import { InitializingComponent } from './initializing/initializing.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { BuildingServicesComponent } from './building-services/building-services.component';
import { CallingServicesComponent } from './calling-services/calling-services.component';
import { AdvancedMessagingComponent } from './advanced-messaging/advanced-messaging.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { LoggingComponent } from './logging/logging.component';
import { BrokerOverviewComponent } from './broker-overview/broker-overview.component';
import { ConnectingBrokerComponent } from './connecting-broker/connecting-broker.component';
import { MultipleBrokersComponent } from './multiple-brokers/multiple-brokers.component';
import { ExtendingChannelsComponent } from './extending-channels/extending-channels.component';
import { StoreBasicsComponent } from './store-basics/store-basics.component';
import { StoreAdvancedComponent } from './store-advanced/store-advanced.component';
import { IframesComponent } from './iframes/iframes.component';
import { IframeDemoComponent } from './iframes/iframe-demo/iframe-demo.component';
import { AbstractionsComponent } from './abstractions/abstractions.component';
import { ImportingAngularComponent } from './importing-angular/importing-angular.component';
import { ImportingUmdComponent } from './importing-umd/importing-umd.component';
import { ImportingReactComponent } from './importing-react/importing-react.component';
import { PingPongComponent } from './examples/ping-pong/ping-pong.component';
import { StockTickerComponent } from './examples/stock-ticker/stock-ticker.component';
import { SimpleStreamComponent } from './examples/simple-stream/simple-stream.component';
import { JokeComponent } from './examples/joke/joke.component';
import { ChangelogComponent } from './changelog/changelog.component';


@NgModule({
    declarations: [TypescriptComponent, OverviewComponent, ImportingComponent, InitializingComponent, HelloWorldComponent,
        BuildingServicesComponent, CallingServicesComponent, AdvancedMessagingComponent, TransactionsComponent, LoggingComponent,
        BrokerOverviewComponent, ConnectingBrokerComponent, MultipleBrokersComponent, ExtendingChannelsComponent,
        StoreBasicsComponent, StoreAdvancedComponent, IframesComponent, IframeDemoComponent, AbstractionsComponent,
        ImportingAngularComponent, ImportingUmdComponent, ImportingReactComponent, PingPongComponent,
        StockTickerComponent, SimpleStreamComponent, JokeComponent, ChangelogComponent],
    imports: [
        CommonModule,
        TypescriptRoutingModule,
        SharedModule,
        CommonModule,
        ClarityModule,
    ]
})
export class TypescriptModule {
}
