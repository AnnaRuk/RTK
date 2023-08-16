/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-spacing */
import AdbIcon from '@mui/icons-material/Adb';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	selectFavoriteProduct,
	selectProducts,
	selectToggle,
} from './selectors';
import {
	deleteProduct,
	loadProducts,
	changeToggleStatus,
	chooseFavoriteProduct,
} from './ProductsSlice';

export default function ProductsList(): JSX.Element {
	const dispatch = useAppDispatch();

	const products = useAppSelector(selectProducts);
	const toggle = useAppSelector(selectToggle);
	const favoriteProduct = useAppSelector(selectFavoriteProduct);

	// addAll
	useEffect(() => {
		dispatch(loadProducts());
	}, []);

	return (
		<div>
			<h1>ProductList</h1>
			<div style={{ color: 'red' }}>
				<h2>favorite product</h2>
				{!favoriteProduct && <p>Favorite product has not been chosen</p>}
				<p>{favoriteProduct?.title}</p>
				<span>{favoriteProduct?.price}</span>
			</div>
			{/* // toggle */}
			<button type="button" onClick={() => dispatch(changeToggleStatus())}>
				Change status toggle
			</button>
			<div
				style={
					toggle ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
				}
			>
				Toggle
			</div>
			{products.map((product) => (
				<li key={String(product.id)}>
					{product.title}
					<div>{product.description}</div>
					<img style={{ width: '100px' }} src={product.image} alt="" />
					<p>{product.price}</p>
					{/* delete */}
					<button
						type="button"
						onClick={() => dispatch(deleteProduct(product.id))}
					>
						DEL
					</button>
					<AdbIcon onClick={() => dispatch(chooseFavoriteProduct(product))} />
				</li>
			))}
		</div>
	);
}
