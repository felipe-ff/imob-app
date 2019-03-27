import { Component, Input, OnInit } from '@angular/core';
import { PropertyService } from '../service/property.service';
import { SwUpdate } from '@angular/service-worker';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listing2',
  templateUrl: './listing2.component.html',
  styleUrls: ['./listing2.component.scss']
})
export class Listing2Component implements OnInit {
  houseList: any[];
  ngOnInit() {
   // this.doSearch(null);
  }

  constructor(public propertyService: PropertyService, public http: HttpClient, updates: SwUpdate, alertController: AlertController) {
    this.doSearch(null);
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
