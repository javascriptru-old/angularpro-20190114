import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
