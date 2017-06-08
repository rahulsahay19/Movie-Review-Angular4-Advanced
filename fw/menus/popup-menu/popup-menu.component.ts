import { MenuItem, MenuService } from '../../services/menu.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fw-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent implements OnInit {

 @Input() menu : Array<MenuItem>;
  constructor(private menuService:MenuService) { }

  ngOnInit() {
  }

}
