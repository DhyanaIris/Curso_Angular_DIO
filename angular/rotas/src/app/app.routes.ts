import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'portifolio',
    component: PortifolioComponent,
    children: [
      {
        path: ':id',
        component: PortifolioComponent,
        pathMatch: 'prefix'
      },
      {
        path: ':id/:token',
        component: PortifolioComponent,
        pathMatch: 'prefix'
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
