import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  state_side_bar:boolean=true;

  @Input('child_data') set child_data({sidebar_state}:any) {

    this.state_side_bar=sidebar_state;

   
}

ToggleSidebar(){
  this.state_side_bar=! this.state_side_bar;
}
}
