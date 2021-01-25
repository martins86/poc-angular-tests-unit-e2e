import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Casos de Teste';
  points = 1;

  plus1() {
    this.points++;
  }

  reset() {
    this.points = 0;
  }
}
