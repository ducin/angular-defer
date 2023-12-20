import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { SnippetDialogContent } from '../ui-snippet-dialog-content/ui-snippet-dialog-content';

@Component({
  standalone: true,
  template: `
    <router-outlet />
    <button class="code-btn" (click)="codeDialog.showModal()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        data-slot="icon"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    </button>

    <dialog #codeDialog>
      <button autofocus (click)="codeDialog.close()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          data-slot="icon"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      @defer (on viewport(codeDialog)) {
        <app-snippet-dialog-content />
      } @loading (after 60ms; minimum 500ms) {
        <p>Loading snippets...</p>
      }
    </dialog>
  `,
  imports: [RouterOutlet, SnippetDialogContent],
  styles: `
    button {
      cursor: pointer;

      padding: 0.5rem;
      border-radius: 0.5rem;
      background: -webkit-linear-gradient(var(--angle),var(--orange-red) 0%,var(--vivid-pink) 50%,var(--electric-violet) 100%);

      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }

    button.code-btn {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
    }

    button svg {
      width: 2rem;
      height: 2rem;
      color: var(--main-accent-color);

      stroke-width: 2;
    }

    dialog {
      position: relative;
      overflow: clip;

      height: 80%;
      width: 80%;

      border-radius: 0.5rem;
      background-color: var(--main-background-color);
      border: 1px solid var(--main-accent-color);
      box-shadow: 3px 3px 5px var(--main-accent-color);
    }

    dialog:has([open]) {
      display: flex;
      flex-direction: column;
    }

    dialog button {
      position: absolute;
      right: 1rem;
    }

    dialog button svg {
      width: 1rem;
      height: 1rem;
    }

    ::backdrop {
      background: #000;
      opacity: 0.75;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'use-case-container' },
})
export default class UseCaseContainer {}
