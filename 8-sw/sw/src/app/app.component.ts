import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sw-test';

  constructor(updates: SwUpdate, swPush: SwPush) {
    updates.available.subscribe(_ => {
      // dialog 
    });
    
    swPush.messages.subscribe(message => {
      console.log(message);
    });
    swPush.requestSubscription({
      serverPublicKey: 'BDvmxd_PZxD2s5pYKR5td2WZARaf4hDb6nNU_5dHnhpXonUwL2DOw5kqhzc3rj7vfGChe0cAipocAsbWdw64ltM'  //it's an output from `web-push generate-vapid-keys` command (check README.md)
    }).then( subscription => console.log(subscription.toJSON()) );
  }
}
