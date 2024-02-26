import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { settings } from 'src/settings';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  
})
export class MainComponent implements OnInit {
  public sidebar_closed:boolean=settings.state_sidebar_closed;

  constructor(private service_shared:SharedService) {}
  

  ngOnInit(): void {
      this.data_receiver();
  }

  data_receiver(){
    //debugger;
    let subscription = this.service_shared.dataReceiver().subscribe((result) => {
        if(result.type=='toggle_sidebar'){
          this.sidebar_closed=result.data;

        }

    });
    this.subscriptions.push(subscription);
  }
  ngOnDestroy() {
    this.disposeAllSubscriptions();
  }

  subscriptions: Subscription[] = [];

  disposeAllSubscriptions() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
