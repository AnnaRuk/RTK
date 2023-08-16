/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/space-infix-ops */
/* eslint-disable arrow-spacing */
import { RootState } from '../../app/store';
import Product from './types/Product';

export const selectProducts = (state: RootState): Product[] =>
	state.products.products;
export const selectError = (state: RootState): string | undefined =>
	state.products.error;
export const selectToggle = (state: RootState): boolean | undefined =>
	state.products.toggle;
export const selectFavoriteProduct = (state: RootState): Product | undefined =>
	state.products.favoriteProduct;
