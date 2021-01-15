/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GolangRoutingModule} from './golang-routing.module';
import {SharedModule} from "@vmw/transport-docs/shared/shared.module";
import {ClarityModule} from "@clr/angular";
import {OverviewComponent} from './overview/overview.component';
import {GolangComponent} from './golang.component';
import { ImportingComponent } from './importing/importing.component';
import { InitializingComponent } from './initializing/initializing.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';


@NgModule({
    declarations: [OverviewComponent, GolangComponent, ImportingComponent, InitializingComponent, HelloWorldComponent],
    imports: [
        CommonModule,
        GolangRoutingModule,
        SharedModule,
        CommonModule,
        ClarityModule,
    ]
})
export class GolangModule {
}
