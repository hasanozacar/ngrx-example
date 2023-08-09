import { createReducer, on } from '@ngrx/store';
import { addProduct, removeProduct } from './products.actions';
import { Product } from '../models/product';

export const intitialState: ReadonlyArray<Product> = [];

export const ProductReducer = createReducer(
  intitialState,
  on(addProduct, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ]),
  on(removeProduct, (state, { productId }) =>
    state.filter((product) => product.id != productId)
  )
);
