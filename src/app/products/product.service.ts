import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable,of,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  AddProduct(product:Product):Observable<Product>{
    return of(product);
  }
}
