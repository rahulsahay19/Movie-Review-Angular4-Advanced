import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { ScreenService } from '../../fw/services/screen.service';
import { FrameworkConfigService } from '../../fw/services/framework-config.service';
import { FwModule } from '../../fw/fw.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesComponent } from './movies/movies.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MoviesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FrameworkConfigService,ScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
