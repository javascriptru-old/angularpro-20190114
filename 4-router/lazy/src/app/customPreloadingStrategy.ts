import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

export class CustomPreloadingStrategy extends PreloadingStrategy {

    preload(route: Route, load: () => Observable<any>): Observable<boolean> {
        if(route.data.preload) {
          return of(true).pipe(flatMap(_ => load()));
        }
        return of(false);
    };
}