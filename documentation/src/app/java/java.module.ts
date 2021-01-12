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


@NgModule({
    declarations: [OverviewComponent, JavaComponent, ImportingComponent, InitializingComponent, HelloWorldComponent, ConfiguringComponent],
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
