import { Component, Input } from '@angular/core';
import { PropertyService } from '../service/property.service';
import { SwUpdate } from '@angular/service-worker';
import { AlertController } from '@ionic/angular';
import { Listing2Component } from '../listing2/listing2.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //@Input() listing: Listing2Component;

  constructor() {
  }
}
