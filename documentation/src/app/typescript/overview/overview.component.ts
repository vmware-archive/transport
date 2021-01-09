import {Component, OnInit} from '@angular/core';
import {goCommands, TermCommand} from '@vmw/transport-docs/shared/model';

@Component({
    selector: 'transport-ts-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

    public commands: Array<TermCommand> = goCommands;

    constructor() {
    }

    ngOnInit(): void {
    }

}
