import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {BusUtil} from "@vmw/transport/util/bus.util";
import {LogLevel} from "@vmw/transport/log";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

BusUtil.bootBusWithOptions(LogLevel.Debug, false, true);
