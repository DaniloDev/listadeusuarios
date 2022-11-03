import { Component, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserDetailsPage } from "../../pages/user-details/user-details"

@Component({
  selector: "user-card",
  templateUrl: "./user-card.html",
  styleUrls: ['./user-card.scss'],
})
export class UserCardComponent {
  @Input()
  user

  public imgLoaded: boolean = false;

  constructor(
    private  _modalCtrl: ModalController,
    ) { }

  async openUser() {
    const modal = await this._modalCtrl.create({
      component: UserDetailsPage,
      componentProps: {
        user: this.user
      }
    });
    return await modal.present();
  }

}
