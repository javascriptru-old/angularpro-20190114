import { Component, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

const TOTAL_COUNT = makeStateKey('total_count');

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="">Home</a>
    <a routerLink="lazy">Lazy</a>
    <router-outlet></router-outlet>
    <br><h1>{{data.total_count}}</h1>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  data;

  constructor(@Inject(PLATFORM_ID) private platformId, 
  private http: HttpClient, 
  private state: TransferState) {
    console.log(platformId);
  }

  ngOnInit() {
    if(!this.state.hasKey(TOTAL_COUNT)){
      this.http.get('https://api.github.com/search/users?q=angular').subscribe((data: {total_count}) => {
        this.state.set(TOTAL_COUNT, data);
      });

      if(isPlatformServer(this.platformId)) {         
        this.state.set(TOTAL_COUNT, { total_count: 1000 });
      }
   }

   this.data = this.state.get(TOTAL_COUNT, { total_count: 0 });    

  }
}
