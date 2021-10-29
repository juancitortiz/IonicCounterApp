import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public tapCounter:number = 0;
  constructor() {}

  increase() {
    this.tapCounter++;
  }
  decrease() {
    this.tapCounter--;
  }
  reset() {
    this.tapCounter = 0;
  }
}
