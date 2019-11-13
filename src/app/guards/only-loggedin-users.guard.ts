import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import {Observable} from 'rxjs/Observable'
import {Router} from '@angular/router';

/*class UserToken {}
class Permissions {
  router:Router;
  constructor(_router: Router){
    this.router=_router;
  }
  canActivate(user: UserToken, id: string): boolean {
    let isAuthenticatedUser:boolean=false;
    if(isAuthenticatedUser){
      return true;
    }else {
      this.router.navigateByUrl('/login');
    }

    }
}*/

export class OnlyLoggedInUsersGuard implements CanActivate {

  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    console.log("OnlyLoggedInUsersGuard (Activated by -"+route.url+")");
    //console.log(route);
    //console.log(state);

    return true;
  }

}
