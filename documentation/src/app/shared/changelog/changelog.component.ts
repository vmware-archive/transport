/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { Component, Input, OnInit } from '@angular/core';
import { ClrDatagridComparatorInterface, ClrDatagridSortOrder } from '@clr/angular';

import { ChangelogEntry } from './changelog.model';

export class VersionComparator implements ClrDatagridComparatorInterface<ChangelogEntry> {
    compare(a: ChangelogEntry, b: ChangelogEntry) {
        const pa = a.version.split('.');
        const pb = b.version.split('.');
        for (let i = 0; i < 3; i++) {
            const na = Number(pa[i]);
            const nb = Number(pb[i]);
            if (na > nb) return 1;
            if (nb > na) return -1;
            if (!isNaN(na) && isNaN(nb)) return 1;
            if (isNaN(na) && !isNaN(nb)) return -1;
        }
        return 0;
    }
}

@Component({
    selector: 'transport-changelog',
    templateUrl: './changelog.component.html',
    styleUrls: ['./changelog.component.scss'],
})
export class ChangelogComponent implements OnInit {
    @Input() changelog: Array<ChangelogEntry> = [];

    versionComparator = new VersionComparator();
    ClrDatagridSortOrder = ClrDatagridSortOrder;
    loading = false;

    constructor() {}

    ngOnInit(): void {}
}
