import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { ApiCharactersListComponent } from './api-characters-list/api-characters-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: ColorSelectorComponent,
    path: 'color-selector',
  },
  {
    component: ApiCharactersListComponent,
    path: 'api-test',
  },
  {
    component: LoginPageComponent,
    path: 'login',
  },
  {
    component: SigninPageComponent,
    path: 'signin',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
