import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomPreloadingStrategy } from './customPreloadingStrategy';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CustomPreloadingStrategy
  ],
  entryComponents: [
    AdminComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
