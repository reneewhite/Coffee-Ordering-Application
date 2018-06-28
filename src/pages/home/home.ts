import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { NavController, Checkbox } from 'ionic-angular';
import { isCheckedProperty } from 'ionic-angular/util/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
productName
name
chocolate
cream
choc
cre
whipped 
quantity = 0;
reset = 0;
priceChoc = 7;
priceCream = 7;
totPrice = 0;
counter = 0;
subCounter = 0;
order
summary: boolean;
  constructor(public navCtrl: NavController) {
    this.summary = false;

  }

  onOrder(){
    this.summary= true;
    if(this.cream == true)
    {
      this.cre = "+whipped cream"
      this.cream = false;
      this.totPrice = this.quantity * this.priceCream;
    }

    if(this.chocolate == true){
      this.choc ="+chocolate"
      this.chocolate = false;
      this.totPrice = this.quantity * this.priceChoc;
    }

    
    
  }

  onUp() {
    this.quantity += 1;
  }

  onDown() {
    this.quantity -= 1;
  }

  onReset() {
     this.summary = false;
     this.quantity = 0;
     this.productName = "";
  }



}
