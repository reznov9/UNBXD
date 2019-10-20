import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loadedProducts: any = null;
  isLoading = false;
  error : boolean = false;
  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .loadDetails()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data: any) => {
        this.loadedProducts = data;
      },
      err => {
        this.error = true;
      });
  }

  selectedFacets(option:string){
    console.log(option)
  };

  selectedProduct(product:any){
    console.log(product)
  }
}
