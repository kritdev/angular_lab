import { Injectable } from '@angular/core';
import { DetailCardItem } from './detail-card-item';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { StatisticCardComponent } from './statistic-card/statistic-card.component';
import { TableCardComponent } from './table-card/table-card.component';

@Injectable({
  providedIn: 'root'
})
export class DetailCardService {

  retrieveCardDetail(): DetailCardItem[] {
    return [
      new DetailCardItem(DetailCardComponent, 'dynamic card 1'),
      new DetailCardItem(DetailCardComponent, 'dynamic card 2'),
      new DetailCardItem(DetailCardComponent, 'dynamic card 3'),
    ];
  }

  retrieveNewsCards(): DetailCardItem[] {
    return [
      new DetailCardItem(NewsCardComponent, {title:'Independence Day discount!', content:'Get a 30% discount on nopCommerce copyright removal key and premium support. Coupon code - JULY4.'}),
      new DetailCardItem(NewsCardComponent, {title:'Premium support services', content:'Get dedicated support from the nopCommerce team with a guaranteed response within 24 hours. Click here for more info.'}),
      new DetailCardItem(NewsCardComponent, {title:'Recommended hosting for your store', content:'Everleap cloud hosting seamlessly scales sites with ease and they move stores for free. Learn more and get a 30 day free trial.'}),
    ];
  }

  retrieveStatisticCards(): DetailCardItem[] {
    return [
      new DetailCardItem(StatisticCardComponent, {title:'Orders', count:5, iconName:'shopping_bag', bgClass:'bg-primary'}),
      new DetailCardItem(StatisticCardComponent, {title:'Pending return requests', count:0, iconName:'autorenew', bgClass:'bg-warning'}),
      new DetailCardItem(StatisticCardComponent, {title:'Registered customers', count:6, iconName:'person_add_alt', bgClass:'bg-success'}),
      new DetailCardItem(StatisticCardComponent, {title:'Low stock products', count:1, iconName:'trending_down', bgClass:'bg-danger'}),
    ];
  }

  retrieveOrderTableCard(): DetailCardItem[] {
    return [
      new DetailCardItem(TableCardComponent, {
        columns: ['Order Status', 'Today', 'This Week', 'This Month', 'This Year', 'All time'],
        types: ['text', 'text', 'text', 'text', 'text', 'text'],
        records: [
            ['Pending','$0.00','$0.00','$0.00','$0.00','$2,468.80'],
            ['Processing','$0.00','$0.00','$0.00','$0.00','$1,957.00'],
            ['Complete','$0.00','$0.00','$0.00','$0.00','$43.50'],
            ['Cancelled','$0.00','$0.00','$0.00','$0.00','$0.00'],
          ]
      }),
    ];
  }

  retrieveIncompleteOrderTableCard(): DetailCardItem[] {
    return [
      new DetailCardItem(TableCardComponent, {
        columns: ['Item','Total','Count'],
        types: ['text', 'text', 'view-button'],
        records: [
          ['Total unpaid orders (pending payment status)','$2,468.80'],
          ['Total not yet shipped orders','$4,315.00'],
          ['Total incomplete orders (pending order status','$2,468.80'],          
          ]
      }),
    ];
  }

  constructor() { }
}
