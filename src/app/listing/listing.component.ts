import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { PropertyService } from '../service/property.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {

  houseList: any[] = [];
  tabType;
  loading;
  max;
  first = true;
  offset = 0;
  limit = 6;
  constructor(public propertyService: PropertyService, updates: SwUpdate,
    alertController: AlertController, public loadingController: LoadingController) {
  }

  ngOnInit() {}

  async init(tab) {
    this.loading = await this.loadingController.create();
    await this.loading.present();
    this.tabType = tab;
    await this.count();
    await this.doSearch(null);
  }

  loadData(event) {
    console.log('Done');
    console.log(this.max);
    if ( (this.offset + this.limit) > this.max) {
      this.doSearch(() => event.target.complete());
      this.first = false;
    }
  }

  count() {
    const filters: any = {};
    filters.purpose = {name: 'aluguel', code: this.tabType};
    this.propertyService.getBooksCount(filters).subscribe( data => {
      this.max = data.items.length;
    });
  }

  doSearch(stopLoading) {
    const filters: any = {};
    filters.purpose = {name: 'aluguel', code: this.tabType};
    this.propertyService.getBooks(filters, this.limit, this.offset).subscribe( data => {
      this.houseList = this.houseList.concat(data.items);
      console.log('dismiss');
      this.offset += this.limit;
      if (this.loading) {
        console.log('dismisss');
        this.loading.dismiss();
      }
      if (stopLoading) {
        stopLoading();
      }
    });
  }

  doRefresh(event) {
    this.houseList = [];
    this.offset = 0;
    this.first = true;
    this.count();
    console.log('Begin async operation');
    this.doSearch(() => event.target.complete());
  }
}
