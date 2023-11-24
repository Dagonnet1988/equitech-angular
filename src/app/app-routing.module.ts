import { DetailsFormComponent } from './pages/details-form/details-form.component';
import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { ListFormComponent } from './pages/list-form/list-form.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'form', component: FormComponent
  },
  {
    path:'list', component: ListFormComponent
  },
  {
    path:':id', component: DetailsFormComponent
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
