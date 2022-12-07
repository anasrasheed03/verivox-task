import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { PRODUCTS } from 'src/app/interfaces/product';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input('productData') productData: PRODUCTS[] = [];
  @Output() filteredRecords = new EventEmitter();
  public sortType: string = '';
  public sortList: any[] = [
    { label: 'Product title', value: 'title' },
    { label: 'Low to High Price', value: 'lowPrice' },
    { label: 'High to Low Price', value: 'highPrice' },
  ];
  public minPrice: any = '0';
  public maxPrice: any = '0';
  public stars: boolean[] = Array(5).fill(false);
  constructor() {}

  ngOnInit(): void {}

  public applySearchFilter(event: KeyboardEvent) {
    let filterValue = (event.target as HTMLInputElement).value;
    const newRecords = this.productData.filter(
      (product) => product.title == filterValue.trim().toLowerCase()
    );
    this.onReset();
    this.filteredRecords.emit(newRecords);
  }

  public onSortByChange() {
    let sortedRecords;
    switch (this.sortType) {
      case 'lowPrice': {
        sortedRecords = this.productData.sort(
          (low, high) => low.price - high.price
        );
        break;
      }

      case 'highPrice': {
        sortedRecords = this.productData.sort(
          (low, high) => high.price - low.price
        );
        break;
      }

      case 'title': {
        sortedRecords = this.productData.sort(function (low, high) {
          if (low.title < high.title) {
            return -1;
          } else if (low.title > high.title) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      }

      default: {
        sortedRecords = this.productData.sort(
          (low, high) => low.price - high.price
        );
        break;
      }
    }
    this.onReset();
    return this.filteredRecords.emit(sortedRecords);
  }

  public onRatingChange(rating: number) {
    this.stars = this.stars.map((_, i) => rating > i);
    const count = this.stars.filter(Boolean).length;
    const newRecords = this.productData.filter(
      (product) => product.rating == count
    );
    this.onReset();
    this.filteredRecords.emit(newRecords);
  }

  public onSearchByPrice(): any {
    let newRecords = this.productData.filter(
      (product) =>
        product.price >= this.minPrice && product.price <= this.maxPrice
    );
    newRecords = newRecords.sort((low, high) => low.price - high.price);
    this.onReset();
    this.filteredRecords.emit(newRecords);
  }

  public onReset(): any {
    this.maxPrice = '';
    this.minPrice = '';
    this.sortType = '';
    this.filteredRecords.emit(this.productData);
  }
}
