import { Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild } from '@angular/core';
import { DetailCardItem } from '../detail-card-item';
import { DetailCardDirective } from '../detail-card.directive';
import { DetailCardComponent } from '../detail-card/detail-card.component';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent implements OnInit {

  @Input() title = 'card-title';

  @ViewChild(DetailCardDirective, {static: true}) cardDetail!: DetailCardDirective;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this. printConsole();
    this.loadComponent();
  }

  loadComponent() {
    const item = new DetailCardItem(DetailCardComponent, 'dynamic component');
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
    const viewContainerRef = this.cardDetail.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DetailCardComponent>(componentFactory);
    componentRef.instance.data = item.data;
  }

  printConsole() {
    console.log('cardDetail : ' + this.cardDetail);
  }

}
