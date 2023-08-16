import { createAction,props } from "@ngrx/store";
import { Product } from "../models/product";

export const addProduct = createAction('[Product] Add Product',props<Product>());
export const addProductSucces = createAction('[Product] Add Product Successfully',props<Product>())
export const addProductFailure = createAction('[Product] Add Product Failure',props<{error:any}>())

export const removeProduct = createAction('[Product] Remove Product',props<{productId:string}>());