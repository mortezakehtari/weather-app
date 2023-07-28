import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';
import { AuthGurad } from './utils/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => MainModule, canActivate: [AuthGurad] },
  { path: 'login', loadChildren: () => LoginModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
