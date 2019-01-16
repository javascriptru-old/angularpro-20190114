import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicComponentManifest } from './dynamic-component.manifest';
import { DynamicComponentLoaderModule } from './dynamic-component-loader.module';

const manifests: DynamicComponentManifest[] = [
  {
    componentId: 'message',
    path: 'dynamic-message',
    loadChildren: './message/message.module#MessageModule',
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicComponentLoaderModule.forRoot(manifests),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
