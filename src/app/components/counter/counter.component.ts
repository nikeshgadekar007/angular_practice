import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  couterValue = signal(0);

  increment(value: number) {
    this.couterValue.update(currentValue => currentValue + value);
  }
  decrement(value: number) {
    this.couterValue.update(currentValue => currentValue - value);
  }
  reset() {
    this.couterValue.set(0);
  }
}
