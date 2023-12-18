import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { DeferWhenConditionComponent } from './defer-usecases/defer-when-condition';
import { DeferOnIdleComponent } from './defer-usecases/defer-on-idle';
import { DeferOnViewportComponent } from './defer-usecases/defer-on-viewport';
import { DeferOnInteractionComponent } from './defer-usecases/defer-on-interaction';
import { DeferOnHoverComponent } from './defer-usecases/defer-on-hover';
import { DeferOnTimerComponent } from './defer-usecases/defer-on-timer';
import { DeferOnImmediateComponent } from './defer-usecases/defer-on-immediate';

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
  path: '',
  redirectTo: 'about',
  pathMatch: 'full'
}];
