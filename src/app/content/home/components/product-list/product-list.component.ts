import { Component, Input, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input('productData') productList: PRODUCTS[] = [];
  constructor() {}

  ngOnInit(): void {}
}
