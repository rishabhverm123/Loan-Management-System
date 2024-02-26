import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from '../header/header.component';
import { CenterComponent } from '../center/center.component';
import { SidebarComponent } from '../center/sidebar/sidebar.component';
import { MainComponent } from './main.component';
import { SharedService } from 'src/app/services/shared.service';


@NgModule({
  declarations: [MainComponent,    HeaderComponent,
    CenterComponent,
    SidebarComponent,],
  imports: [
    CommonModule,
    MainRoutingModule,

  ],
  providers:[SharedService]
})
export class MainModule { }
