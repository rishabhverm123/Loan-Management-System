import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from '../header/header.component';
import { CenterComponent } from '../center/center.component';
import { SidebarComponent } from '../center/sidebar/sidebar.component';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [MainComponent,    HeaderComponent,
    CenterComponent,
    SidebarComponent,],
  imports: [
    CommonModule,
    MainRoutingModule,

  ]
})
export class MainModule { }
