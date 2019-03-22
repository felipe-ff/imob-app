import { Component } from '@angular/core';
import { CdrService } from '../service/cdr.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  houseList;

  constructor(private cdrService: CdrService) {
    console.log('ok1');
    this.cdrService.getBooks(undefined).subscribe( data => {
      console.log('ok2');
      this.houseList = data.items;
      console.log(data);
     // this.loading = false;
    });
  }

}
