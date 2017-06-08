import { MenuItem, MenuService } from '../../services/menu.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

 //@Input() item: MenuItem; see angular-cli issue #2034, below is the workaround.
 @Input() item = <MenuItem>null;
  constructor(private menuService:MenuService) { }

  ngOnInit() {
  }

}
