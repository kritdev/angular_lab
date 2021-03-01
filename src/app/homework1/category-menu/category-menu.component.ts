import {Component} from '@angular/core';

@Component({
  selector: 'category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent {
  menuItemList = [
    {title:'โค้ดส่งฟรี', image:'../../../../assets/cat-menu1.png'},
    {title:'แบรนด์แท้ถูกชัวร์', image:'../../../../assets/cat-menu2.png'},
    {title:'Electronics Zone', image:'../../../../assets/cat-menu3.png'},
    {title:'Fashion Zone Free Shipping', image:'../../../../assets/cat-menu4.png'},
    {title:'Shopee Mart Free 100 Coins*', image:'../../../../assets/cat-menu5.png'},
    {title:'โค้ดส่วนลด', image:'../../../../assets/cat-menu6.png'},
    {title:'Partner Privileges', image:'../../../../assets/cat-menu7.png'}
  ];
  constructor() {}
}