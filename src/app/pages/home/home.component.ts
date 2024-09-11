import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements DoCheck {
  num: number = 1;

  ngDoCheck(): void {
    console.log('made update', this.num);
  }

  add1() {
    this.num++;
  }
}
