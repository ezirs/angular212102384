import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { otentikasiGuard } from './otentikasi.guard';
import { ForexComponent } from './forex/forex.component';
import { CuacaComponent } from './cuaca/cuaca.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [otentikasiGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [otentikasiGuard] },
  { path: 'dashboard2', component: Dashboard2Component, canActivate: [otentikasiGuard] },
  { path: 'dashboard3', component: Dashboard3Component },
  { path: 'login', component: LoginComponent, canActivate: [authGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [authGuard] },
  { path: 'mahasiswa', component: MahasiswaComponent, canActivate: [otentikasiGuard] },
  { path: 'forex', component: ForexComponent, canActivate: [otentikasiGuard] },
  { path: 'cuaca', component: CuacaComponent, canActivate: [otentikasiGuard] },
  { path: 'logout', redirectTo: 'login'},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
