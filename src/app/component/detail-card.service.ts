import { Injectable } from '@angular/core';
import { DetailCardItem } from './detail-card-item';
import { DetailCardComponent } from './detail-card/detail-card.component';

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

  constructor() { }
}
