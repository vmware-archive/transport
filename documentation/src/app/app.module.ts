/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */


import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WelcomeComponent} from './welcome/welcome.component';
import {TransportHeroAnimationComponent} from './transport-hero-animation/transport-hero-animation.component';
import {AboutComponent} from './about/about.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        TransportHeroAnimationComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ClarityModule,
        BrowserAnimationsModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
