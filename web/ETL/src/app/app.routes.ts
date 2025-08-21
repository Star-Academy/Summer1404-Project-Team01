import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainLayoutComponent} from './layout/main-layout/main-layout.component';
// import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  },

  { path: '**', redirectTo: 'welcome' }
];
