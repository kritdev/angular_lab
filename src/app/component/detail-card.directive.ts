import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[detailCard]',
})
export class DetailCardDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}