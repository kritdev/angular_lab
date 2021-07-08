import { Injectable } from '@angular/core';
import { DetailCardItem } from './detail-card-item';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { StatisticCardComponent } from './statistic-card/statistic-card.component';

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
  constructor() { }
}
