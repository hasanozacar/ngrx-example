import { createReducer, on } from '@ngrx/store';
import { addProduct, addProductFailure, addProductSucces, removeProduct } from './products.actions';
import { Product } from '../models/product';
import { state } from '@angular/animations';

export const intitialState: Product[] = [];

export const ProductReducer = createReducer(
  intitialState,
  on(addProduct, (state) => 
{   return state}
  ),
  on(addProductSucces, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ]),
  on(addProductFailure, (state, { error}) => {console.log(error);
    return state
  }),
  on(removeProduct, (state, { productId }) =>
    state.filter((product) => product.id != productId)
  )
);
