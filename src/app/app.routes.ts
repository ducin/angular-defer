import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { DeferGuideComponent } from './defer-guide.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'defer-guide',
    component: DeferGuideComponent,
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () => import('./defer-usecases/use-case-container'),
    children: [
      {
        path: 'defer-when-condition',
        loadComponent: () =>
          import('./defer-usecases/defer-when-condition').then(
            (m) => m.DeferWhenConditionComponent,
          ),
      },
      {
        path: 'defer-on-idle',
        loadComponent: () =>
          import('./defer-usecases/defer-on-idle').then(
            (m) => m.DeferOnIdleComponent,
          ),
      },
      {
        path: 'defer-on-viewport',
        loadComponent: () =>
          import('./defer-usecases/defer-on-viewport').then(
            (m) => m.DeferOnViewportComponent,
          ),
      },
      {
        path: 'defer-on-interaction',
        loadComponent: () =>
          import('./defer-usecases/defer-on-interaction').then(
            (m) => m.DeferOnInteractionComponent,
          ),
      },
      {
        path: 'defer-on-hover',
        loadComponent: () =>
          import('./defer-usecases/defer-on-hover').then(
            (m) => m.DeferOnHoverComponent,
          ),
      },
      {
        path: 'defer-on-immediate',
        loadComponent: () =>
          import('./defer-usecases/defer-on-immediate').then(
            (m) => m.DeferOnImmediateComponent,
          ),
      },
      {
        path: 'defer-on-timer',
        loadComponent: () =>
          import('./defer-usecases/defer-on-timer').then(
            (m) => m.DeferOnTimerComponent,
          ),
      },
      {
        path: 'defer-accordion',
        loadComponent: () =>
          import('./defer-usecases/defer-accordion').then(
            (m) => m.DeferAccordionComponent,
          ),
      },
      {
        path: 'defer-multiple',
        loadComponent: () =>
          import('./defer-usecases/defer-multiple').then(
            (m) => m.DeferMultipleComponent,
          ),
      },
      {
        path: 'defer-npm-package',
        loadComponent: () =>
          import('./defer-usecases/defer-npm-package').then(
            (m) => m.DeferNPMPackageComponent,
          ),
      },
      {
        path: 'defer-nested',
        loadComponent: () =>
          import('./defer-usecases/defer-nested').then(
            (m) => m.DeferNestedComponent,
          ),
      },
      {
        path: 'defer-prefetch',
        loadComponent: () =>
          import('./defer-usecases/defer-prefetch').then(
            (m) => m.DeferPrefetchComponent,
          ),
      },
      {
        path: 'defer-error',
        loadComponent: () =>
          import('./defer-usecases/defer-error').then(
            (m) => m.DeferErrorComponent,
          ),
      },
      {
        path: 'defer-loading-vs-placeholder',
        loadComponent: () =>
          import('./defer-usecases/defer-loading-vs-placeholder').then(
            (m) => m.DeferLoadingVsPlaceholderComponent,
          ),
      },
    ],
  },
];
