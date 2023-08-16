/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */

import Product from './Product';
export default interface ProductsState {
	products: Product[];
	error?: string;
	toggle?: boolean;
	favoriteProduct?: Product;
}
