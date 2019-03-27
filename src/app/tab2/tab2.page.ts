import { Component, ViewChild, Input } from '@angular/core';
import { PropertyService } from '../service/property.service';
import { HttpClient } from '@angular/common/http';
import { Tab1Page } from '../tab1/tab1.page';
import { ListingPage } from '../listing/listing.page';
import { Listing2Component } from '../listing2/listing2.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //houseList: any[];

  @Input() listing: Listing2Component;
  
  constructor() {

  }

}