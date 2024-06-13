import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PasswordRecoveryPageComponent } from './components/password-recovery-page/password-recovery-page.component';
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'posts/details/:id', component: PostPageComponent },
  { path: 'searchPage/details/:value', component: SearchPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'recovery', component: PasswordRecoveryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
