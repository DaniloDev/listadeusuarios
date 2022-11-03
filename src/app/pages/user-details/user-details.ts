import { User } from './../../models/User';
import { Component, Input } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";


@Component({
  selector: "user-details",
  templateUrl: "./user-details.html",
  styleUrls: ['./user-details.scss'],
})

export class UserDetailsPage {
  @Input()
  user: any

  public imgLoaded: boolean = false;
  constructor(
    private _navParams: NavParams,
    private _modalCtrl: ModalController,

  ) {

    this.user = this._navParams.get("user");
  }

   closeModal(){
    this._modalCtrl.dismiss(UserDetailsPage)
   }


}



