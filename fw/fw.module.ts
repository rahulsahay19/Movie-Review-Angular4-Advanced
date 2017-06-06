import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { ScreenLarge } from './directives/screen-large.directive';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from "./content/content.component";
import { TitleBarComponent } from "./title-bar/title-bar.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLarge,
    ScreenBelowLarge
  ],
  exports:[
    FrameworkBodyComponent
    
  ]
})
export class FwModule { }
