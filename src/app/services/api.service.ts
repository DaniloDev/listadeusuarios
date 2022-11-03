import { CacheService } from 'ionic-cache'
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  users$: Observable<any>
  req$: Observable<any>
  usersKey = "my-users"

  constructor(private http: HttpClient, private cache: CacheService){}

   getUsers(page): Observable<any>{
      let url = `https://randomuser.me/api/?results=20&format=json&inc=gender,name,email,picture&nat=br&page=${page}`
      let req = this.http.get(url)
      let ttl = 10

      if(page) {
        let delayType = 'all'
        this.users$ = this.cache.loadFromDelayedObservable(url, req, this.usersKey, ttl, delayType)
      }else{
        this.users$ = this.cache.loadFromObservable(url, req, this.usersKey, ttl)
      }

      return this.users$
  }

}
