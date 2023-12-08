/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status } from '../types/Status';
import { Product } from '../types/Product';
import { getProduct } from '../api/product';

export type ProductDetailsState = {
  productDetails: Product | null;
  status: Status;
};

const initialState: ProductDetailsState = {
  productDetails: null,
  status: Status.IDLE,
};

export const fetchProductDetails = createAsyncThunk(
  'productDetails/fetch',
  (productId: string) => getProduct(productId),
);

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.status = Status.IDLE;
        state.productDetails = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state) => {
        state.status = Status.FAILED;
      });
  },
});

export const { actions } = productDetailsSlice;
export default productDetailsSlice.reducer;
