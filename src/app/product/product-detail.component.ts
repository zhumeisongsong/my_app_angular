import 'rxjs/add/operator/switchMap';

import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

import {ProductService} from './product.service';

import {Product} from './product';

@Component({
  selector: 'pd-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})

export class ProductDetailComponent implements OnInit {
  @Input() product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,) {
  };

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productService.getProduct(+params.get('id')))
      .subscribe(product => {
        this.product = product
      });
  }

  //TODO:popup ngclass
  isHidden: boolean = true;

  Popup(isHidden: boolean) {
    this.isHidden = isHidden;
  }

  onHidden(close: boolean) {
    this.isHidden = close;
  }

  addToCart(){
    console.log('should login in')



  }
}
