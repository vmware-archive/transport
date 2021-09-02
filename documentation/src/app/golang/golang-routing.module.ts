/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GolangComponent } from '@vmw/transport-docs/golang/golang.component';
import { OverviewComponent } from '@vmw/transport-docs/golang/overview/overview.component';
import { InitializingComponent } from '@vmw/transport-docs/golang/initializing/initializing.component';
import { ImportingComponent } from '@vmw/transport-docs/golang/importing/importing.component';
import { HelloWorldComponent } from '@vmw/transport-docs/golang/hello-world/hello-world.component';

const routes: Routes = [
    {
        path: '',
        component: GolangComponent,
        children: [
            { path: '', component: OverviewComponent },
            { path: 'overview', component: OverviewComponent },
            { path: 'initializing', component: InitializingComponent },
            { path: 'importing', component: ImportingComponent },
            { path: 'hello-world', component: HelloWorldComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GolangRoutingModule {}
