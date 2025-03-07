import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationComponent } from './notification/notification.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './option/settings/settings.component';
import { FilterComponent } from './option/filter/filter.component';
import { AnomalyDetectComponent } from './option/anomaly-detect/anomaly-detect.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: 'register',
    component: RegisterComponent,
    children: [
      { path: '', component: RegisterComponent }
    ]
  },
  {
    path: '',
    component: MainlayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'maps', component: MapsComponent },
      { path: 'notifications', component: NotificationComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
