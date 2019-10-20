import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FacetComponent } from './facet/facet.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, ProductCardComponent, FacetComponent],
  exports: [LoaderComponent, ProductCardComponent, FacetComponent]
})
export class SharedModule {}
