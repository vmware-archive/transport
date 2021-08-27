/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

export interface ChangelogEntry {
    date?: string;
    version?: string;
    notes?: ChangelogNote[];
}

export class ChangelogNote {
    description?: string;
    review_uri?: string;
}
