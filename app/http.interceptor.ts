
import {Injectable,Injector} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpResponse,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
//import {AuthService} from './core/security/auth.service';
//import { environment } from '../environments/environment';
import { DummySingletonService } from "./core/dummy-singleton.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  //  constructor(private auth: AuthService) {}
  constructor(private _dummySvc:DummySingletonService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("in AuthInterceptor")
  // Get the auth header from the service.
    //const authHeader = this.auth.getAuthorizationHeader();
      const authHeader = "Dummy Auth Header";
      const contentType= "application/json"
    // Clone the request to add the new header.
    //const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
    const authReq = req.clone({headers: req.headers//.set('Authorizatio1', authHeader)
                                                   .set('Content-Type', contentType)}
                              );
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq)
    .do(event => {
      console.log(event)
      console.log(`in do AuthInterceptor-`+this._dummySvc.getName()+ ' '+event.type);
      this._dummySvc.setName("name set in AuthInterceptor")
    })

  }
}


export class TimingLogInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("in TimingLogInterceptor")
  	const started = Date.now();
    return next
      .handle(req)
      ._finally(() => {
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
            //this.loaderService.stop();
       })
  /* .do(event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      })
      .catch(error => {
        if (error instanceof HttpErrorResponse) {
          const elapsed = Date.now() - started;
          console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        };
        return Observable.throw(error);
      });*/
  }
}

@Injectable()
export class ResponseErrorInterceptor implements HttpInterceptor {
  constructor(private _dummySvc:DummySingletonService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("in ResponseErrorInterceptor")
    //const started = Date.now();
    return next.handle(req)
    .do(event => {
      console.log(`in do ResponseErrorInterceptor-`+this._dummySvc.getName());
      this._dummySvc.setName("name set in ResponseErrorInterceptor")
    })
    .catch(error => {
        //const elapsed = Date.now() - started;
        //console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
          if (error instanceof HttpErrorResponse) {
            console.log('Processing http error', error);
            if(error.status==401){
                console.log('PageNot FOUND 401');
            }
          }

          return Observable.throw(error);
        });;
  }
}


//-------------------------------------------------------------------------------------
/*
.catch((res) => {
      if (res.status === 401 || res.status === 403) {
          //this.loadingService.start();
          if(auth.refreshToken()){

          }else{
            //this.router.navigate-/login
            //xx//return Observable.throw(res);
          };
          //Retrieve authToken after refreshToken and replace in authReq.
          const reAauthReq = authReq.clone({headers: req.headers.set('Content-Type', contentType)});
                                          //  .set('Authorization', 'Bearer '+auth.getToken())} );
          // Re-send the newly cloned request
          return next.handle(reAauthReq)
    }

  });
.catch((res) => {
            if (res.status === 401 || res.status === 403) {
                this.loadingService.start();
                return authenticationService.refreshToken().flatMap((data: any) => {
                    this.loadingService.stop();
                    if (data.token !== '') {
                        localStorage.setItem('currentUser', JSON.stringify(data.user));
                        localStorage.setItem('currentUserPermissions', JSON.stringify(data.permissions));
                        localStorage.setItem('JWToken', data.token);
                    } else {
                        localStorage.removeItem('currentUser');
                        localStorage.removeItem('currentUserPermissions');
                        localStorage.removeItem('JWToken');
                        this.router.navigate(['./auth/login']);
                        return Observable.throw(res);
                    }
                    let clonedRequestRepeat = req.clone({
                        headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('JWToken')),
                        url: this.fixUrl(req.url)
                    });
                    return next.handle(clonedRequestRepeat).do(event => {
                        if (event instanceof HttpResponse) {

                            const elapsed = Date.now() - started;
                            console.log('%c Request for ' + req.urlWithParams + ' took ' + elapsed + ' ms.', 'background: #222; color: yellow');
                        }
                    });
                })
            } else {
                return Observable.throw(res);
            }

        });*/
