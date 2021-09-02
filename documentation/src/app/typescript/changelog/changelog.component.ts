import { Component } from '@angular/core';

import * as packageJSON from '@vmw/transport/package.json';
import { ChangelogEntry } from '@vmw/transport-docs/shared/changelog/changelog.model';

@Component({
    selector: 'changelog-typescript',
    templateUrl: './changelog.component.html',
    styleUrls: ['./changelog.component.scss'],
})
export class ChangelogComponent {
    changelog: Array<ChangelogEntry> = [];

    packageJSON: any = packageJSON;

    ngOnInit() {
        this.changelog = packageJSON.changelogHistory;
    }
}
