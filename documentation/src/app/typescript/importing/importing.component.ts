import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {HighlightService} from '@vmw/transport-docs/services/highlight.service';

@Component({
  selector: 'transport-importing',
  templateUrl: './importing.component.html',
  styleUrls: ['./importing.component.scss']
})
export class ImportingComponent implements OnInit, AfterViewChecked {
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
