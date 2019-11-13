import {CanDeactivate,ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";

import {Component} from '@angular/core'

export class DeactivateGuard implements CanDeactivate<any> {
  canDeactivate(
  component: Component,
  route: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
):boolean {

    console.log("DeactivateGuard (Activated by -"+route.url+")");
    //console.log(route);
    //console.log(currentState);
    //console.log(nextState);
  //  console.log(component);

    return true;
  }

}
