import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomPreloadingStrategy } from './customPreloadingStrategy';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', 
    data: {
      preload: true
    },
    loadChildren: './lazy/lazy.module#LazyModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
