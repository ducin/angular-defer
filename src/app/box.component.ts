import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule],
  styles: `
    :host {
      display: block;
      max-width: 75%;
      margin: 10px;
      padding: 10px;
      border-radius: 6px;
      background-color: var(--main-background-color);
      border: 1px solid var(--main-accent-color);
      box-shadow: 3px 3px 5px var(--main-accent-color);
    }
  `,
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `
})
export class BoxComponent {
}
