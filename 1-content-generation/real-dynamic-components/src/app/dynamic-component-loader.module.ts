import { DynamicComponentManifest } from "./dynamic-component.manifest";
import { ModuleWithProviders, NgModuleFactoryLoader, SystemJsNgModuleLoader, InjectionToken, NgModule } from "@angular/core";
import { ROUTES } from "@angular/router";
import { DynamicComponentLoader } from "./dynamic-component-loader.service";

export const DYNAMIC_COMPONENT = new InjectionToken<any>('DYNAMIC_COMPONENT');
export const DYNAMIC_COMPONENT_MANIFESTS = new InjectionToken<any>('DYNAMIC_COMPONENT_MANIFESTS');

@NgModule({
    providers: []
  })
  export class DynamicComponentLoaderModule {
    static forRoot(manifests: DynamicComponentManifest[]): ModuleWithProviders {
      return {
        ngModule: DynamicComponentLoaderModule,
        providers: [
          // provider for Angular CLI to analyze
          DynamicComponentLoader,
          { provide: ROUTES, useValue: manifests, multi: true },
          { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
          { provide: DYNAMIC_COMPONENT_MANIFESTS, useValue: manifests },
        ],
      };
    }
  }