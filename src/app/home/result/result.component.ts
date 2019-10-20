import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, filter, takeUntil } from 'rxjs/operators';
import { QuoteService } from '../quote.service';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  loadedProducts: any = null;
  isLoading = false;
  error : boolean = false;
  imageUrl : string;
  public destroyed = new Subject<any>();
  constructor(private quoteService: QuoteService,
              private route : Router,
              private activatedroute : ActivatedRoute) {
      this.route.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
      }
  
      this.route.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
            this.route.navigated = false;
            window.scrollTo(0, 0);
            this.fetchData();
        }
    });
  }

  ngOnInit() {
    this.isLoading = true;
    this.fetchData();
  }

  fetchData() {
    let slug = this.activatedroute.snapshot.paramMap.get('slug');
    this.quoteService
      .loadDetails(slug)
      .pipe(
        finalize(() => {
          this.getImage();
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

  getImage() {
    let imgUrl = (this.loadedProducts.hasOwnProperty('banner')) ? this.loadedProducts.banner.banners[0].imageUrl : '../../../assets/abstract.jpg';
    this.imageUrl = `url(${imgUrl})`;
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
