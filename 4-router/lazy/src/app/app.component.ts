import { Component, SystemJsNgModuleLoader, NgModuleFactory, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazy';

  constructor(
    private injector: Injector,
    private router: Router) {

  }

  loadMoreStates() {
     const routerConfig = [...this.router.config,  ...[
      {path: 'admin', component: AdminComponent},
      { path: 'settings', 
       data: {
         preload: true
       },
       loadChildren: './lazy/lazy.module#LazyModule' 
     }]];
     this.router.resetConfig(routerConfig);
  }
}
