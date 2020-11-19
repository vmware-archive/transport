import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../models/base.component';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent extends BaseComponent implements OnInit {



    constructor() {
        super('WelcomeComponent');
    }

    ngOnInit(): void {
    }

}
