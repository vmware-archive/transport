import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlankComponent } from '@vmw/transport-docs/golang/plank/plank.component';
import { HelloWorldComponent } from '@vmw/transport-docs/golang/plank/hello-world/hello-world.component';

const routes: Routes = [
    {
        path: '',
        component: PlankComponent,
    },
    {
        path: 'hello-world',
        component: HelloWorldComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PlankRoutingModule {}
