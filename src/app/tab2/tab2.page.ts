import { Component } from '@angular/core';
import { PropertyService } from '../service/property.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  houseList: any[];

  constructor(private propertyService: PropertyService, private http: HttpClient) {
    const filters: any = {};
    filters.purpose = {name: 'venda', code: 'sell'};
    this.propertyService.getBooks(filters).subscribe( data => {
      this.houseList = data.items;
      console.log(data);
     // this.loading = false;
    });
  }

}
