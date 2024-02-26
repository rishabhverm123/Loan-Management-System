import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private service_shared:SharedService) {}

  
  state_side_bar:boolean=true;

  @Input('child_data') set child_data({sidebar_state}:any) {

    this.state_side_bar=sidebar_state;

   
}

ToggleSidebar(){
  this.state_side_bar=! this.state_side_bar;
  this.service_shared.transmit_data("toggle_sidebar",this.state_side_bar)
}
}
