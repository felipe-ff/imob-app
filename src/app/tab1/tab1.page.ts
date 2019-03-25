import { Component } from '@angular/core';
import { PropertyService } from '../service/property.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  houseList: any[];

  constructor(private propertyService: PropertyService, private http: HttpClient) {
    const filters: any = {};
    filters.purpose = {name: 'aluguel', code: 'rent'};
    this.propertyService.getBooks(filters).subscribe( data => {
      this.houseList = data.items;
      console.log(data);
     // this.loading = false;
    });
  }

}
