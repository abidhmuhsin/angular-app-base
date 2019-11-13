import {CanActivateChild,ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";

export class AlwaysAuthChildrenGuard implements CanActivateChild {
  canActivateChild( route: ActivatedRouteSnapshot,) {
    console.log("AlwaysAuthChildrenGuard (Activated by- "+route.url+' )');
    //  console.log(route);
    return true;
  }
}
