import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 5';

  constructor(private http:HttpClient){
/*    this.http.get('https://jsonplaceholder.typicode.com/users').map(data => {
      console.log(data);
    }).subscribe(data => {
          console.log(data);
        })
*/
  }
}