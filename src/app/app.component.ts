import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';
// import 'rxjs-compat/operators/finalize';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login-app';
  greeting = {};
  constructor( private http: HttpClient, private router: Router) {
   
  }

 /* logout() {
    this.http.post('logout', {}).pipe(finalize(() => {
        this.app.authenticated = false;
        this.router.navigateByUrl('/login');
    })).subscribe();
  }
*/

}
