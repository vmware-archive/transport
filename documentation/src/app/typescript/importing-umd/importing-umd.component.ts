import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {HighlightService} from "@vmw/transport-docs/services/highlight.service";

@Component({
    selector: 'transport-importing-umd',
    templateUrl: './importing-umd.component.html',
    styleUrls: ['./importing-umd.component.scss']
})
export class ImportingUmdComponent implements OnInit, AfterViewChecked {
    constructor(private highlightService: HighlightService) {
    }

    public highlighted = false;

    ngOnInit() {
    }

    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;

        }
    }
}
