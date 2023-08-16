/* eslint-disable linebreak-style */
/* eslint-disable react/function-component-definition */
// eslint-disable-next-line import/default
import React, { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createProduct } from './ProductsSlice';

const ProductCreate: React.FC = (): JSX.Element => {
	const [title, setTitle] = useState<string>('');
	const [price, setPrice] = useState<number>(0);
	const [category, setCategory] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [image, setImage] = useState<string>('');

	const [error, setError] = useState<string>('');

	const dispatch = useAppDispatch();

	function clearForm(): void {
		setTitle('');
		setPrice(0);
		setCategory('');
		setDescription('');
		setImage('');
		setError('');
	}

	function validateInput(): boolean {
		if (title.trim() === '') {
			setError('title error');
			return false;
		}
		if (price <= 0) {
			setError('price error');
			return false;
		}
		if (category.trim() === '') {
			setError('category error');
			return false;
		}
		if (image.trim() === '') {
			setError('image error');
			return false;
		}

		return true;
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		if (validateInput()) {
			const product = {
				title,
				price,
				description,
				image,
				category,
			};
			dispatch(createProduct(product));
		}
		clearForm();
	}

	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				{error && <p>{error}</p>}
				<input
					type="text"
					placeholder="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<input
					type="number"
					placeholder="price"
					value={price}
					onChange={(e) => setPrice(Number(e.target.value))}
				/>

				<select
					name="category"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					<option value="">category</option>
					<option value="electronic">electronic</option>
					<option value="men's clothing"> men clothing</option>
					<option value="jewelery">jewelery</option>
				</select>

				<input
					type="text"
					placeholder="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>

				<input
					type="text"
					placeholder="image"
					value={image}
					onChange={(e) => setImage(e.target.value)}
				/>

				<button type="submit">Create Product</button>
			</form>
		</div>
	);
};

export default ProductCreate;
