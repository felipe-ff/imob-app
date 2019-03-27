import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PropertyService } from '../service/property.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {

  houseList: any[];
  tabType;
  constructor(public propertyService: PropertyService, updates: SwUpdate,
    alertController: AlertController) {

  }

  ngOnInit() {}

  init(tab) {
    this.tabType = tab;
    this.doSearch(null);
  }
  
  doSearch(stopLoading) {
    const filters: any = {};
    filters.purpose = {name: 'aluguel', code: this.tabType};
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
