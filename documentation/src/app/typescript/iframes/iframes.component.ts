/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */


import { Component, OnInit } from '@angular/core';
import {MessageHandler, ProxyControl, ProxyType} from "@vmw/transport";
import {HighlightService} from "@vmw/transport-docs/services/highlight.service";
import {AbstractBase} from "@vmw/transport/core";

@Component({
  selector: 'transport-iframes',
  templateUrl: './iframes.component.html',
  styleUrls: ['./iframes.component.scss']
})
export class IframesComponent extends AbstractBase implements OnInit {

    private chatStream: MessageHandler<any>;
    private proxyControl: ProxyControl;
    public highlighted = false;

    constructor(private highlightService: HighlightService) {
        super('TsDistributedIframesComponent');
    }

    ngOnInit() {

        // enable message proxy.
        this.proxyControl = this.bus.enableMessageProxy({
            protectedChannels: ['chatty-chat'],
            proxyType: ProxyType.Parent,
            parentOrigin: `https://transport-bus.io`,
            acceptedOrigins: [
                'http://localhost:4200',
                'https://vmware.github.io',
                'https://transport-bus.io'
            ],
            targetAllFrames: true,
            targetSpecificFrames: null,
        });

        // ensure we open the chatty chat channel, to ensure messages are not dropped.
        // we don't however care about doing anything with the traffic on the stream here.
        this.chatStream = this.bus.listenStream('chatty-chat');
        this.chatStream.handle(() => {
        }); // do nothing, just ensure the channel is open.
    }

    ngOnDestroy() {
        this.chatStream.close();
        this.proxyControl.stopListening();
    }

    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    }
}
