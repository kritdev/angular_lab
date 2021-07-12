import { Component, ComponentFactoryResolver, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
  @Input() iconName: String;
  @Input() cardItemList: DetailCardItem[];
  @Input() button = {name:'', link:''};

  @ViewChildren(DetailCardDirective) cardDetailList!: QueryList<DetailCardDirective>;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  showDetail = true;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loadComponent();
    });
  }

  ngAfterContentInit() {
  }

  loadComponent() {
    if(!this.cardItemList) { return;}
    
    this.cardItemList.forEach(( cardItem,i) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(cardItem.component);
      const viewContainerRef = this.cardDetailList.get(i).viewContainerRef;
      viewContainerRef.clear();
  
      const componentRef = viewContainerRef.createComponent<DetailCardComponent>(componentFactory);
      componentRef.instance.data = cardItem.data;      
    });
  }

  printConsole() {
    console.log('cardDetailList : ' + this.cardDetailList.length);

    this.cardDetailList.forEach((i,e) => {
      console.log(`i:${i}, e:${e}`);
    });
  }

  columnStyle() {
    return this.cardItemList.length == 4? 'col-lg-3 col-6' : 'col-md';
  }

  toggleDisplay() {
    this.showDetail = !this.showDetail;
  }

}
