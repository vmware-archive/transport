/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HighlightService } from '../services/highlight.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AnimatedConsoleComponent } from './animated-console/animated-console.component';
import { QuickstartComponent } from './quickstart/quickstart.component';
import { ChangelogComponent } from './changelog/changelog.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, AnimatedConsoleComponent, QuickstartComponent, ChangelogComponent],
    imports: [CommonModule, ClarityModule, RouterModule, FormsModule, ReactiveFormsModule],
    exports: [HeaderComponent, FooterComponent, AnimatedConsoleComponent, QuickstartComponent, ChangelogComponent],
    providers: [HighlightService],
})
export class SharedModule {}
