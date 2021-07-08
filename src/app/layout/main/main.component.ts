import { Component, OnInit } from '@angular/core';
import { DetailCardItem } from 'src/app/component/detail-card-item';
import { DetailCardService } from 'src/app/component/detail-card.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cardItemList: DetailCardItem[];
  newsCardList: DetailCardItem[];
  staticticCardList: DetailCardItem[];

  constructor(private detailCardService: DetailCardService) { }

  ngOnInit(): void {
    this.retrieveCardDetail();
  }
  
  retrieveCardDetail() {
    this.cardItemList = this.detailCardService.retrieveCardDetail();
    this.newsCardList = this.detailCardService.retrieveNewsCards();
    this.staticticCardList = this.detailCardService.retrieveStatisticCards();
  }

}
