import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HomeComponent } from './home.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatRadioModule } from '@angular/material/radio';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
    ProductComponent,
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule,
    NgxSliderModule,
    MatChipsModule,
  ],
  exports: [HomeComponent],
  providers: [CurrencyPipe],
})
export class HomeModule {}
