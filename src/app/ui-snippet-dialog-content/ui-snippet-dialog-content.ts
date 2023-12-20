import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

function injectSnippets() {
  const router = inject(Router);
  const sanitizer = inject(DomSanitizer);

  const snippets = signal({ tsHtml: '', htmlHtml: '' });

  Promise.all([
    fetch(`/angular-defer/assets/snippets${router.url}/ts.html`).then((res) => res.text()),
    fetch(`/angular-defer/assets/snippets${router.url}/html.html`).then((res) => res.text()),
  ]).then(([tsHtml, htmlHtml]) => {
    // NOTE: we generate these files so they're safe
    snippets.set({
      tsHtml: sanitizer.bypassSecurityTrustHtml(tsHtml) as string,
      htmlHtml: sanitizer.bypassSecurityTrustHtml(htmlHtml) as string,
    });
  });

  return snippets.asReadonly();
}

@Component({
  selector: 'app-snippet-dialog-content',
  standalone: true,
  template: `
    <span id="tabs-title" class="sr-only">Snippet Tabs</span>

    @if (snippets().tsHtml && snippets().htmlHtml) {
      <div class="tabs-container">
        <ul aria-labelledby="tabs-title" role="tablist">
          <li [attr.aria-selected]="activePanelId() === 'html'" role="tab">
            <a
              id="html-tab"
              (click)="activePanelId.set('html'); (false)"
              href="#html"
            >
              HTML
            </a>
          </li>
          <li [attr.aria-selected]="activePanelId() === 'ts'" role="tab">
            <a
              id="ts-tab"
              (click)="activePanelId.set('ts'); (false)"
              href="#ts"
            >
              TS
            </a>
          </li>
        </ul>

        <div class="tabs-panels">
          <div
            id="html"
            aria-labelledby="html-tab"
            [innerHTML]="snippets().htmlHtml"
            [hidden]="activePanelId() !== 'html'"
          ></div>
          <div
            id="ts"
            aria-labelledby="ts-tab"
            [innerHTML]="snippets().tsHtml"
            [hidden]="activePanelId() !== 'ts'"
          ></div>
        </div>
      </div>
    }
  `,
  styleUrl: './ui-snippet-dialog-content.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnippetDialogContent {
  protected snippets = injectSnippets();
  protected activePanelId = signal('html');
}
