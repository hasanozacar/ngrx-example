
import * as productActions from "./products.actions"
import { ProductService } from "./product.service";
import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class ProductEffects {

    // This is an NgRx Effect that responds to 'AddBook' actions.
    addBook$ = createEffect(() => this.actions$.pipe(
        // Listen for actions of type 'AddBook'
        ofType(productActions.addProduct),
    
        // For each 'AddBook' action, call 'addBook' on the book service.
        // 'mergeMap' allows multiple concurrent 'addBook' calls.
        mergeMap((action) => this.productService.AddProduct(action)
        .pipe(
            // If the 'addBook' call is successful, dispatch 'AddBookSuccess' action with the book data.
            map(product => productActions.addProductSucces(product)),
    
            // If the 'addBook' call fails, dispatch 'AddBookFailure' action with the error.
            catchError((error) => of(productActions.addProductFailure({ error })))
        )
        )
    ));
  
    
    constructor(
        private actions$: Actions,
        private productService: ProductService
    ){}

}