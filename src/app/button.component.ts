import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  styles: `
    button {
      background-color: color-mix(in srgb, var(--vivid-pink) 10%, white);
      border-radius: 3px;
      border: 1px solid var(--vivid-pink);
      box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
      box-sizing: border-box;
      color: var(--vivid-pink);
      cursor: pointer;
      display: inline-block;
      font-weight: 400;
      margin: 8px .8em;
      outline: none;
      padding: 8px .8em;
      position: relative;
      text-align: center;
      text-decoration: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: baseline;
      white-space: nowrap;
    }

    button:hover,
    button:focus {
      background-color: color-mix(in srgb, var(--electric-violet) 10%, white);
      color: var(--electric-violet);
      border-color: var(--electric-violet);
    }

    button:focus {
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--electric-violet) 30%, white);
    }

    button:active {
      background-color: color-mix(in srgb, var(--electric-violet) 10%, white);
      color: var(--electric-violet);
      border-color: var(--electric-violet);
      box-shadow: none;
    }
  `,
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
}
