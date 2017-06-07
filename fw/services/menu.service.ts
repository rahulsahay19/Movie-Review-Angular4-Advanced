import { IConfigurationFile } from 'tslint/lib/configuration';
import { Injectable } from '@angular/core';

export interface MenuItem{
    text:string;
    icon:string;
    route:string;
    submenu:string;
}

@Injectable()
export class MenuService{
    items:Array<MenuItem>;
}