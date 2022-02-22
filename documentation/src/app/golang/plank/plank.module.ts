import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@vmw/transport-docs/shared/shared.module';
import { PlankRoutingModule } from '@vmw/transport-docs/golang/plank/plank-routing.module';

@NgModule({
    imports: [CommonModule, ClarityModule, SharedModule, PlankRoutingModule],
})
export class PlankModule {}
