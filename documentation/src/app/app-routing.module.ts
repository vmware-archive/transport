/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { IframeDemoComponent } from '@vmw/transport-docs/typescript/iframes/iframe-demo/iframe-demo.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'ts', loadChildren: () => import('./typescript/typescript.module').then((m) => m.TypescriptModule) },
    { path: 'java', loadChildren: () => import('./java/java.module').then((m) => m.JavaModule) },
    { path: 'golang', loadChildren: () => import('./golang/golang.module').then((m) => m.GolangModule) },
    { path: 'iframe-demo', component: IframeDemoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
