import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'Casos de Teste';
  points = 1;

  plus1(): any {
    this.points++;
  }

  reset(): any {
    this.points = 0;
  }
}
