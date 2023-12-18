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
      border: 1px solid var(--electric-violet);
      padding: 10px;
      background-color: color-mix(in srgb, var(--electric-violet) 10%, white);
      border-radius: 6px;
      box-shadow: 3px 3px 5px var(--electric-violet);
      margin: 10px;
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
