import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/interfaces/product';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public productData: PRODUCTS[] = [];
  public filterData: any = [];
  constructor(private service: HomeService) {}

  ngOnInit(): void {
    //revoke api method
    this.getData();
  }

  private async getData(): Promise<any> {
    await this.service.getDataFromAPI().subscribe(
      (res: any) => {
        this.productData = res;
        console.log(this.productData);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  //get filtered data from filter component
  public getFilteredRecords(newRecords: PRODUCTS): any {
    this.filterData = newRecords;
  }
}
