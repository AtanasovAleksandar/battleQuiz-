import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { HomePageComponent } from './quiz/home-page/home-page.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'home' , component: HomePageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
