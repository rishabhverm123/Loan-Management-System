import { Component } from '@angular/core';
import { settings } from 'src/settings';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  
})
export class MainComponent {
  public sidebar_closed:boolean=settings.state_sidebar_closed;
}
