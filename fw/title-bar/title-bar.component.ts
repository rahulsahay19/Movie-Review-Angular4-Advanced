import { MenuService } from '../services/menu.service';
import { ScreenService } from '../services/screen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  //Now, in our view we can get the access of ScreenService, ctor is the glue between injectable code and view
  constructor(private screenService:ScreenService, private menuService:MenuService) { }

  ngOnInit() {
  }

}
