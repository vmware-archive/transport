/**
 * Copyright(c) VMware Inc. 2017-2020
 */

export interface ChangelogEntry {
    date: string;
    version: string;
    notes: ChangelogNote[];
}

export class ChangelogNote {
    description: string;
    review_uri: string;
}
