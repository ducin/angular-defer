import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { DeferWhenConditionComponent } from './defer-usecases/defer-when-condition';
import { DeferOnIdleComponent } from './defer-usecases/defer-on-idle';
import { DeferOnViewportComponent } from './defer-usecases/defer-on-viewport';
import { DeferOnInteractionComponent } from './defer-usecases/defer-on-interaction';
import { DeferOnHoverComponent } from './defer-usecases/defer-on-hover';
import { DeferOnTimerComponent } from './defer-usecases/defer-on-timer';
import { DeferOnImmediateComponent } from './defer-usecases/defer-on-immediate';
import { DeferNestedComponent } from './defer-usecases/defer-nested';
import { DeferLoadingVsPlaceholderComponent } from './defer-usecases/defer-loading-vs-placeholder';
import { DeferErrorComponent } from './defer-usecases/defer-error';
import { DeferPrefetchComponent } from './defer-usecases/defer-prefetch';
import { DeferGuideComponent } from './defer-guide.component';
import { DeferMultipleComponent } from './defer-usecases/defer-multiple';
import { DeferNPMPackageComponent } from './defer-usecases/defer-npm-package';

export const routes: Routes = [{
  path: 'about',
  component: AboutComponent,
}, {
  path: 'defer-when-condition',
  component: DeferWhenConditionComponent,
}, {
  path: 'defer-on-idle',
  component: DeferOnIdleComponent,
}, {
  path: 'defer-on-viewport',
  component: DeferOnViewportComponent,
}, {
  path: 'defer-on-interaction',
  component: DeferOnInteractionComponent,
}, {
  path: 'defer-on-hover',
  component: DeferOnHoverComponent,
}, {
  path: 'defer-on-immediate',
  component: DeferOnImmediateComponent,
}, {
  path: 'defer-on-timer',
  component: DeferOnTimerComponent,
}, {
  path: 'defer-multiple',
  component: DeferMultipleComponent,
}, {
  path: 'defer-npm-package',
  component: DeferNPMPackageComponent,
}, {
  path: 'defer-nested',
  component: DeferNestedComponent,
}, {
  path: 'defer-prefetch',
  component: DeferPrefetchComponent,
}, {
  path: 'defer-error',
  component: DeferErrorComponent,
}, {
  path: 'defer-loading-vs-placeholder',
  component: DeferLoadingVsPlaceholderComponent,
}, {
  path: 'defer-guide',
  component: DeferGuideComponent,
}, {
  path: '',
  redirectTo: 'about',
  pathMatch: 'full'
}];
