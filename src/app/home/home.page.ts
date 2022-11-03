import { User } from './../models/User';
import { ApiService } from './../services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
page = 0
user: User[] = []
queryText: string
auxUSer:  User[] = []
maleORFemale: User[] = []

    constructor(private apiService: ApiService) {
      this.getUsers()
    }

    getUsers(event?){
      this.apiService.getUsers(this.page).pipe().subscribe(
        res => {
          this.user = this.user.concat(res['results'])
          this.auxUSer = this.auxUSer.concat(res['results'])
          if(event){
           event.target.complete()
          }
        }
      )
  }

  getMoreUsers(event){
    this.page++
    this.getUsers(event)
  }

  searchByMale(){
    this.user = this.auxUSer

    this.maleORFemale = this.user.filter(res => {
      return res.gender == "male"
    })

    this.user = this.maleORFemale
  }

  searchByFeMale(){

      this.user = this.auxUSer

      this.maleORFemale = this.user.filter(res => {
        return res.gender == "female"
      })

    this.user = this.maleORFemale
  }

  refreshList(){
    this.user = this.auxUSer
  }

  refreshingData(event){
    this.getUsers(event)
  }

}
