import { FrameworkConfigService } from '../../fw/services/framework-config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private frameworkConfigService:FrameworkConfigService){

let config:frameworkConfigService:frameworkConfigService
}
}
