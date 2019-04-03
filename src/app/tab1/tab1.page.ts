import { Component } from '@angular/core';
import { PropertyService } from '../service/property.service';
import { HttpClient } from '@angular/common/http';
import { SwUpdate } from '@angular/service-worker';
import { AlertController, LoadingController } from '@ionic/angular';
import { ListingComponent } from '../listing/listing.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page extends ListingComponent {

  constructor(propertyService: PropertyService, http: HttpClient, updates: SwUpdate,
    alertController: AlertController, public loadingController: LoadingController) {
    super(propertyService, updates, alertController, loadingController);

    this.init('rent');
  }
}
