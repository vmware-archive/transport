import { AfterViewChecked, Component, OnInit } from '@angular/core';

import { HighlightService } from '@vmw/transport-docs/services/highlight.service';

@Component({
    selector: 'transport-importing-react',
    templateUrl: './importing-react.component.html',
    styleUrls: ['./importing-react.component.scss'],
})
export class ImportingReactComponent implements OnInit, AfterViewChecked {
    constructor(private highlightService: HighlightService) {}
    public highlighted = false;

    ngOnInit() {}

    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    }
}
