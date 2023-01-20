import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputVal : String | undefined
  enterValue : String = "";
  enterValue1 : String = "";
  constructor() {}

  enterItem(){
    console.log("Button function is working");
    this.enterValue1 = this.enterValue;
    console.log(this.enterValue);    
    console.log(this.enterValue1);    
  }

}
