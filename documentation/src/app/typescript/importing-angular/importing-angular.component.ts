import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {HighlightService} from "@vmw/transport-docs/services/highlight.service";

@Component({
  selector: 'transport-importing-angular',
  templateUrl: './importing-angular.component.html',
  styleUrls: ['./importing-angular.component.scss']
})
export class ImportingAngularComponent implements OnInit, AfterViewChecked {
    constructor(private highlightService: HighlightService) {}
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
