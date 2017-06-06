import { OnDestroy } from '@angular/core/core';
import { Subscription } from 'rxjs/Rx';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { ScreenService } from '../services/screen.service';

@Directive({selector: '[screenBelowLarge]'})
export class ScreenBelowLarge implements OnDestroy {
  private hasView = false;
  private screenSubscription:Subscription;

  constructor(private viewContainer: ViewContainerRef, 
                private template: TemplateRef<Object>,
                private screenService: ScreenService) {

   this.screenSubscription= screenService.resize$.subscribe(() => this.onResize());

  }

  @Input()
  set screenBelowLarge(condition) {
    // ignore the passed condition and set it based on screen size
    condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;
    
    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if (!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }

  onResize() {
    // trigger the setter
    this.screenBelowLarge = false;
  }

    public ngOnDestroy(): void {
        this.screenSubscription.unsubscribe();
    }
}
