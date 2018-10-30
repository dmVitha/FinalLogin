import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { first } from 'rxjs/internal/operators/first';

import { AuthServicesService } from '../services/auth-services.service';
import { UserInfo } from '../services/models';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

 
  username: string;
  userInfo: UserInfo = new UserInfo();
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthServicesService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.username = params['username'];
      this.loadUserProfile(this.username);
    });
  }

  loadUserProfile(username: string) {
    
    this.authService.getUserProfile(username)
    .pipe(first())
      .subscribe( res => {
        this.userInfo = res;
      },
        error => {
          console.log(error);
        });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
