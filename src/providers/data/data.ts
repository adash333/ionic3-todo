import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataProvider {

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello DataProvider Provider');
  }

  getData() {
    return this.storage.get('items')
  }

  save(data) {
    let newData = JSON.stringify(data);
    this.storage.set('items', newData);
  }

/*
  remove(data) {
    this.storage.remove('items').then(() => { });
  }
*/

}
