import { Component, ViewChild } from '@angular/core';
import { PropertyService } from '../service/property.service';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { SwUpdate } from '@angular/service-worker';
import { ListingComponent } from '../listing/listing.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page extends ListingComponent {
  constructor(propertyService: PropertyService, http: HttpClient, updates: SwUpdate,
    alertController: AlertController, public loadingController: LoadingController) {
    super(propertyService, updates, alertController, loadingController);

    this.init('sell');
  }

}