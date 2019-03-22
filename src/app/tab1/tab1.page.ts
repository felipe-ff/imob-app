import { Component } from '@angular/core';
import { CdrService } from '../service/cdr.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  houseList: any[];

  constructor(private cdrService: CdrService, private http: HttpClient) {
    this.cdrService.getBooks(null).subscribe( data => {
      this.houseList = data.items;
      console.log(data);
     // this.loading = false;
    });
  }

}
