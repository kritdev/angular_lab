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
          ['Total unpaid orders (pending payment status)','$2,468.80',2],
          ['Total not yet shipped orders','$4,315.00',2],
          ['Total incomplete orders (pending order status','$2,468.80',2],          
        ]
      }),
    ];
  }
  
  retrieveLastOrderTableCard(): DetailCardItem[] {
    return [
      new DetailCardItem(TableCardComponent, {
        columns: ['Order #','Order status','Customer','Created on','View'],
        types: ['text', 'status', 'text', 'text', 'view-button'],
        records: [
          ['5','Complete','Victoria Terces (victoria_victoria@nopCommerce.com)','03/13/2017 6:20:10 AM', 1],
          ['4','Processing','Brenda Lindgren (brenda_lindgren@nopCommerce.com)','03/13/2017 6:20:09 AM', 1],
          ['3','Pending','James Pan (james_pan@nopCommerce.com)','03/13/2017 6:20:09 AM', 1],
          ['2','Pending','Arthur Holmes (arthur_holmes@nopCommerce.com)','03/13/2017 6:20:09 AM', 1],
          ['1','Processing','Steve Gates (steve_gates@nopCommerce.com)','03/13/2017 6:20:09 AM', 1],     
        ],
        itemPerPage: 5
      }),
    ];
  }
  
  retrievePopularSearchKeywordCard(): DetailCardItem[] {
    return [
      new DetailCardItem(TableCardComponent, {
        columns: ['Keyword','Count'],
        types: ['text', 'text'],
        records: [
          ['computer','34'],
          ['camera','30'],
          ['jewelry','27'],
          ['shoes','26'],
          ['jeans','19'],     
          ['gift','10'],
        ],
        itemPerPage: 5
      }),
    ];
  }

  retrieveBestSellerCard(): DetailCardItem[] {
    return [
      new DetailCardItem(TableCardComponent, {
        columns: ['Name','Total quantity','Total amount (excl tax)','View'],
        types: ['text', 'text', 'text', 'view-button'],
        records: [
          ["Leica T Mirrorless Digital Camera","1","$530.00",1],
          ["Apple iCam","1","$1,300.00",1],
          ["Levi's 511 Jeans","1","$43.50",1],
          ["Night Visions","1","$2.80",1],
          ["If You Wait (donation)","1","$3.00",1],
          ["Science & Faith","1","$3.00",1],
          ["Fahrenheit 451 by Ray Bradbury","1","$27.00",1],
          ["First Prize Pies","1","$51.00",1],
          ["Pride and Prejudice","1","$24.00",1],
          ["Flower Girl Bracelet","1","$360.00",1],
          ["Vintage Style Engagement Ring","1","$2,100.00",1],
          ["$25 Virtual Gift Card","1","$25.00",1],
        ],
        itemPerPage: 5
      }),
    ];
  }

  retrieveBestSellerByAmountCard(): DetailCardItem[] {
    return [
      new DetailCardItem(TableCardComponent, {
        columns: ['Name','Total quantity','Total amount (excl tax)','View'],
        types: ['text', 'text', 'text', 'view-button'],
        records: [
          ["Vintage Style Engagement Ring","1","$2,100.00",1],
          ["Apple iCam","1","$1,300.00",1],
          ["Leica T Mirrorless Digital Camera","1","$530.00",1],
          ["Flower Girl Bracelet","1","$360.00",1],
          ["First Prize Pies","1","$51.00",1],
          ["Levi's 511 Jeans","1","$43.50",1],
          ["Fahrenheit 451 by Ray Bradbury","1","$27.00",1],
          ["$25 Virtual Gift Card","1","$25.00",1],
          ["Pride and Prejudice","1","$24.00",1],
          ["If You Wait (donation)","1","$3.00",1],
          ["Science & Faith","1","$3.00",1],
          ["Night Visions","1","$2.80",1],
        ],
        itemPerPage: 5
      }),
    ];
  }

  constructor() { }
}
