import { Component } from '@angular/core';
import { PropertyService } from '../service/property.service';
import { SwUpdate } from '@angular/service-worker';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage {
  houseList: any[];

  constructor(private propertyService: PropertyService, public updates: SwUpdate,
    public alertController: AlertController) {

    this.doSearch(null);
  }

  doSearch(stopLoading) {
    const filters: any = {};
    filters.purpose = {name: 'aluguel', code: 'rent'};
    this.propertyService.getBooks(filters).subscribe( data => {
      this.houseList = data.items;
      if (stopLoading) {
        stopLoading();
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.doSearch(() =>  event.target.complete());
  }

}
