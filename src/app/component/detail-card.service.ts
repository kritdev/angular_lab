import { Injectable } from '@angular/core';
import { DetailCardItem } from './detail-card-item';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { NewsCardComponent } from './news-card/news-card.component';

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
      new DetailCardItem(NewsCardComponent, 'dynamic card 1'),
      new DetailCardItem(NewsCardComponent, 'dynamic card 2'),
      new DetailCardItem(NewsCardComponent, 'dynamic card 3'),
    ];
  }

  constructor() { }
}
