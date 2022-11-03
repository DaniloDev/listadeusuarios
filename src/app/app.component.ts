import { Subscription } from 'rxjs';
import { User } from './models/User';
import { ApiService } from './services/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CacheService } from 'ionic-cache'
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit, OnDestroy{
  page = 0
  constructor(private apiService: ApiService, cache: CacheService, platform: Platform) {

    platform.ready().then(()=> {
      cache.setDefaultTTL(60 * 60 * 12)
      cache.setOfflineInvalidate(false)
    })
  }

subscriptions: Subscription[] = []
user: User[] = []


ngOnInit(){
 this.apiService.getUsers(this.page).subscribe({
  next: user => this.user = user,
  error: err => {}
 })
}

ngOnDestroy(){

}
}
