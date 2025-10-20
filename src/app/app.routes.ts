import { Routes } from '@angular/router';
import { DataUsageComponent } from '../modules/data-usage/pages/data-usage.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'data-usage',
    pathMatch: 'full',
  },
  {
    path: 'data-usage',
    component: DataUsageComponent,
  },
  {
    path: '**',
    redirectTo: 'data-usage',
  },
];
