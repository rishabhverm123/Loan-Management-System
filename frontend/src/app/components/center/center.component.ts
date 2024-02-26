import { Component, Input } from '@angular/core';
import { fadeAnimation } from 'src/app/animations';
import { settings } from 'src/settings';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],

})
export class CenterComponent {


    sidebar_closed:boolean=true;

    @Input('child_data') set child_data({sidebar_state}:any) {
  
      this.sidebar_closed=sidebar_state;
  
     
  }
}
