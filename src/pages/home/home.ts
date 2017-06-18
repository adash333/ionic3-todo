import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AdditemPage } from '../additem/additem';
import { ItemDetailPage } from '../item-detail/item-detail';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider) {
    this.dataService.getData().then((items) => {
      if(items) {
        this.items = JSON.parse(items);
      }
    });
  }

  ionViewDidLoad() {
  }

  addItem() {
    let addModal = this.modalCtrl.create(AdditemPage);
    addModal.onDidDismiss((item) => {
      if(item) {
        this.saveItem(item);
      }
    });
    addModal.present();
  }

  saveItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  removeItem(item) {
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.dataService.save(this.items);
  }  
}
