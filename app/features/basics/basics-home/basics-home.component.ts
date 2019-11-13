import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basics-home',
  templateUrl: './basics-home.component.html',
  styleUrls: ['./basics-home.component.css']
})
export class BasicsHomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   // /home/basics/home/userA will give-> {userIdRouteParam: "userA"}
     this.activatedRoute.params.subscribe(params => {
      console.log('RouteParams in basicsHome -',params);
    });
    // /home/basics?test=2&test2=3 will give-> {test: "2", test2: "3"}
    this.activatedRoute.queryParams.subscribe(queryParams => {
      console.log('QueryParams in basicsHome -', queryParams);
    });
    /* may also test with below to get both
    https://angular-app-base.stackblitz.io/home/basics/userA?test=2&test2=3
    */

   // /home/basics/userA will give-> {userIdRouteParam: "userA"}
     this.activatedRoute.data.subscribe(data => {
      console.log('Route `data` in basicsHome -',data);
    });
  }

}