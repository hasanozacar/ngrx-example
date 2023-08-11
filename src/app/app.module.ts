import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { StoreModule } from "@ngrx/store";
import { ProductReducer } from "./products/product.reducer";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductListComponent } from './product-list/product-list.component';
import { AppState } from "./app.state";

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>({ product: ProductReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
