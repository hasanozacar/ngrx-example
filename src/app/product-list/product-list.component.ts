import { Component } from "@angular/core";
import { Store,select } from "@ngrx/store";
import { Observable } from "rxjs";
import { Product } from "../models/product";
import { addProduct, removeProduct } from "../products/products.actions";
import { AppState } from "../app.state";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {

  products$ : Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products$ =store.pipe(select('product'))
  }
  AddProduct(id: string, title: string, author: string) {
    this.store.dispatch(addProduct({ id, title, author }));
  }
  RemoveProduct(productId: string) {
    this.store.dispatch(removeProduct({ productId }));
  }
}
