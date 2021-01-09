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
import {BrokerConnector} from "@vmw/transport";

const routes: Routes = [
    {
        path: '',
        component: TypescriptComponent,
        children: [
            {path: '', component: OverviewComponent},
            {path: 'overview', component: OverviewComponent},
            {path: 'importing', component: ImportingComponent},
            {path: 'initializing', component: InitializingComponent},
            {path: 'hello-world', component: HelloWorldComponent},
            {path: 'building-services', component: BuildingServicesComponent},
            {path: 'calling-services', component: CallingServicesComponent},
            {path: 'advanced-messaging', component: AdvancedMessagingComponent},
            {path: 'transactions', component: TransactionsComponent},
            {path: 'logging', component: LoggingComponent},
            {path: 'broker-overview', component: BrokerConnector},

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TypescriptRoutingModule {
}
