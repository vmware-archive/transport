import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../models/base.component';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent extends BaseComponent implements OnInit {

    public goCommands: Array<TermCommand>;
    public javaCommands: Array<string>;
    public tsCommands: Array<string>;


    constructor() {
        super('WelcomeComponent');
    }

    ngOnInit(): void {
        this.goCommands = [
            {
                title: 'Step 1: Get the code',
                command: 'git clone https://github.com/vmware/transport-go.git',
                notes: 'Pull down the transport-go code from github'
            },
            {
                title: 'Step 2: Build the code',
                command: './build-transport.sh',
                notes: 'Build the transport-go sample server and example services'
            },
            {
                title: 'Step 3: Run the code',
                command: './transport service&',
                notes: 'Start the transport-go sample services'
            },
            {
                title: 'Step 3: Play with the code',
                command: './transport demo',
                notes: 'Run a simple example that connects to the sample service and makes a request'
            },

        ];
    }

}

export interface TermCommand {
    title: string;
    command: string;
    notes: string;
}
