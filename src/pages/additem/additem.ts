import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-additem',
  templateUrl: 'additem.html',
})
export class AdditemPage {

  title: string;
  description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditemPage');
  }

  saveItem() {
    let newItem = {
      title: this.title,
      description: this.description
    };
    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }

}
