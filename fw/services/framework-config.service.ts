import { link } from 'fs';
import { Injectable } from '@angular/core';

export interface IconFiles{
  imageFile:string;
  alt:string;
  link:string;
}

export interface FrameConfigSettings{
  showLanguageSelector?:boolean,
  showUserControls?:boolean,
  showStatusBar?:boolean,
  showStatusBarBreakpoint?:boolean,
  socialIcons?:Array<IconFiles>
}

@Injectable()
export class FrameworkConfigService {
  showLanguageSelector=true;
  showUserControls=true;
  showStatusBar=true;
  showStatusBarBreakpoint=0;
  socialIcons= new Array<IconFiles>();

  configure(settings:FrameConfigSettings):void{
    Object.assign(this,settings);
  }
  

}
