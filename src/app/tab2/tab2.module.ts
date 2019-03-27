import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { Listing2Component } from '../listing2/listing2.component';
import { ListingPageModule } from '../listing/listing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    //ListingPageModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page, Listing2Component]
})
export class Tab2PageModule {}
