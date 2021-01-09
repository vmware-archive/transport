import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AnimatedConsoleComponent} from './animated-console/animated-console.component';
import {HighlightService} from '../services/highlight.service';
import {QuickstartComponent} from './quickstart/quickstart.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        AnimatedConsoleComponent,
        QuickstartComponent,
    ],
    imports: [
        CommonModule,
        ClarityModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AnimatedConsoleComponent,
        QuickstartComponent,
    ],
    providers: [HighlightService]
})
export class SharedModule {
}
