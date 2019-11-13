import {CanActivate} from "@angular/router";

export class RootAuthGuard implements CanActivate {
  canActivate() {
    console.log("RootAuthGuard");
    return true;
  }
}
