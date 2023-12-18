import { Component } from '@angular/core';

@Component({
  selector: 'lazy-on-timer',
  standalone: true,
  template: `
    <h2>lazy-on-timer</h2>
    <ng-content></ng-content>
  `,
})
export class LazyOnTimerComponent {
}
