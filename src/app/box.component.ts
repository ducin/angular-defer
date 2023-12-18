import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule],
  styles: `
    :host {
      display: block;
      max-width: 50%;
      border: 1px solid #000;
      padding: 10px;
      background-color: #f2f2f2;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
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
