import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JavaComponent} from "@vmw/transport-docs/java/java.component";
import {OverviewComponent} from "@vmw/transport-docs/java/overview/overview.component";
import {ImportingComponent} from "@vmw/transport-docs/java/importing/importing.component";
import {InitializingComponent} from "@vmw/transport-docs/java/initializing/initializing.component";
import {HelloWorldComponent} from "@vmw/transport-docs/java/hello-world/hello-world.component";
import {ConfiguringComponent} from "@vmw/transport-docs/java/configuring/configuring.component";

const routes: Routes = [
    {
        path: '',
        component: JavaComponent,
        children: [
            {path: '', component: OverviewComponent},
            {path: 'overview', component: OverviewComponent},
            {path: 'importing', component: ImportingComponent},
            {path: 'configuring', component: ConfiguringComponent},
            {path: 'initializing', component: InitializingComponent},
            {path: 'hello-world', component: HelloWorldComponent},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavaRoutingModule { }
