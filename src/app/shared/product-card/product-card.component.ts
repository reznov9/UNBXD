import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  
  @Input() loadedProducts: Object;

  constructor(private route: Router) { }

  ngOnInit() { }

  getSortPrice(product: any) {
    return (product.sortPrice < product.price)
  };

  selectedProduct(product: any){
    console.log(product)
    this.route.navigateByUrl(`/product/${product.productId}`);
  }

}
