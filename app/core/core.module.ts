import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummySingletonService  } from './dummy-singleton.service';
import { BroadcasterService  } from './broadcaster.service';

import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [DummySingletonService, BroadcasterService]
})
export class CoreModule { 

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    /*Import CoreModule only at root level or AppModule.
    To prevent re-imports in submodules throw exception */
      throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }

}