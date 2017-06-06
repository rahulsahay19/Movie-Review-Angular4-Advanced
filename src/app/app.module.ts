import { ScreenService } from '../../fw/services/screen.service';
import { FrameworkConfigService } from '../../fw/services/framework-config.service';
import { FwModule } from '../../fw/fw.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule
  ],
  providers: [FrameworkConfigService,ScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
