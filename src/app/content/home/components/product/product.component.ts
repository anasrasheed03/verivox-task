import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input('product') product: any;
  public isDetailVisible: boolean = false;
  public stars: boolean[] = [];
  constructor() {}

  ngOnInit(): void {
    this.stars = Array(this.product.rating).fill(true);
  }

  public showDetails(): void {
    this.isDetailVisible = !this.isDetailVisible;
  }
}
