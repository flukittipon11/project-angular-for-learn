// app.routes.ts
import { Routes } from '@angular/router';
import { UserManagementComponent } from './pages/user-management/user-management.component';

export const routes: Routes = [
  { path: 'manage-users', component: UserManagementComponent },
  { path: 'Dashboard', component: UserManagementComponent },
  { path: '', redirectTo: 'manage-users', pathMatch: 'full' } // ให้เปิดมาเจอหน้านี้เลย
];