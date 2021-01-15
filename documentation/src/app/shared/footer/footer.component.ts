import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../models/base.component';
import { VERSION } from '@vmw/transport-docs/environments/version';

@Component({
  selector: 'transport-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BaseComponent implements OnInit {

  public date = new Date().getFullYear();
  public version = VERSION;
  public buildTime = Date.parse(VERSION.time);

  constructor() {
    super('FooterComponent');
  }

  ngOnInit(): void {
  }

}
