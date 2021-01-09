import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'transport-typescript',
    templateUrl: './typescript.component.html',
    styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {

    @ViewChild("mainContent")
    private mainContentDiv!: ElementRef<HTMLElement>;

    constructor() {
    }

    ngOnInit(): void {

    }

    onActivate(_event: any): void {
        // Scrolling back to the top
        // Reference: https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click/48048822
        if (this.mainContentDiv) {
            (this.mainContentDiv.nativeElement as HTMLElement).scrollTop = 0;
        }
    }
}
