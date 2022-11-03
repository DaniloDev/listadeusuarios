import { UserCardComponent } from './../components/user-card/user-card';
import { UserDetailsPage } from './../pages/user-details/user-details';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [HomePage, UserDetailsPage, UserCardComponent]
})
export class HomePageModule {}
