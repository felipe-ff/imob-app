import { Component } from '@angular/core';
import { PropertyService } from '../service/property.service';
import { HttpClient } from '@angular/common/http';
import { SwUpdate } from '@angular/service-worker';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  houseList: any[];

  constructor(private propertyService: PropertyService, private http: HttpClient, public updates: SwUpdate,
    public alertController: AlertController) {

    const filters: any = {};
    filters.purpose = {name: 'aluguel', code: 'rent'};
    this.propertyService.getBooks(filters).subscribe( data => {
      this.houseList = data.items;
     // this.loading = false;
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
}
