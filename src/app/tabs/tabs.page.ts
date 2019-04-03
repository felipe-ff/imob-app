import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  updateAvaiable = false;

  constructor(public updates: SwUpdate, public loadingController: LoadingController) {
    this.promptUpdate();
  }

  promptUpdate() {
     this.updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
      this.updateAvaiable = true;
    });
    this.updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }

  async click1() {
    this.updates.activateUpdate().then(() => document.location.reload());
    const loading = await this.loadingController.create();
    await loading.present();
  }

  click2() {
    console.log('click2');
  }

}
