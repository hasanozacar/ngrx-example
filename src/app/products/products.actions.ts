import { createAction,props } from "@ngrx/store";
import { Product } from "../models/product";

export const addProduct = createAction('[Product] Add Product',props<Product>());
export const removeProduct = createAction('[Product] Remove Product',props<{productId:string}>());