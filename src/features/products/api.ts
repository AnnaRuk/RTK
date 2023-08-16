/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import Product from './types/Product';
import ProductDto from './types/ProductDto';

// GET
export async function getAll(): Promise<Product[]> {
	const res = await fetch('https://fakestoreapi.com/products');
	return res.json();
	/// method GET
}

// DELETE
export async function delProductById(id: number): Promise<Product> {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
		method: 'DELETE',
	});
	return res.json();
}
// POST
export async function createProduct(product: ProductDto): Promise<Product> {
	const res = await fetch('https://fakestoreapi.com/products', {
		method: 'POST',
		// body: JSON.stringify(product)  when the values of fels(keys) is the simple as from server
		body: JSON.stringify({
			title: product.title,
			price: product.price,
			description: product.description,
			image: product.image,
			category: product.category,
		}),
	});
	// return res.json(); /// if server back full new object

	// if server back only id of new object (not object)
	const { id } = await res.json();
	return { ...product, id };
}
// PUT, PuTCH
