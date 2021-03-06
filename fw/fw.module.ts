import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldComponent } from './dynamic-forms/dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form/dynamic-form.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';

import { SignInComponent } from './users/sign-in/sign-in.component';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { MenuComponent } from './menus/menu/menu.component';
import { ScreenService } from './services/screen.service';
import { FrameworkConfigService } from './services/framework-config.service';
import { MenuService } from './services/menu.service';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { ScreenLarge } from './directives/screen-large.directive';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from "./content/content.component";
import { TitleBarComponent } from "./title-bar/title-bar.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLarge,
    ScreenBelowLarge,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    SignInComponent,
    RegisterUserComponent,
    DynamicFormComponent,
    DynamicFieldComponent
  ],
  providers:[
    FrameworkConfigService,
    ScreenService,
    MenuService
  ],
  exports:[
    FrameworkBodyComponent,
    DynamicFormComponent
    
  ]
})
export class FwModule { }
