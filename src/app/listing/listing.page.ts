import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PropertyService } from '../service/property.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {

  houseList: any[];

  constructor(public propertyService: PropertyService, updates: SwUpdate,
    alertController: AlertController) {

    this.doSearch(null);
  }

  ngOnInit() {
  }

  doSearch(stopLoading) {
    const filters: any = {};
    filters.purpose = {name: 'aluguel', code: 'sell'};
    this.propertyService.getBooks(filters).subscribe( data => {
      this.houseList = data.items;
      if (stopLoading) {
        stopLoading();
      }
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.doSearch(() =>  event.target.complete());
  }
}
