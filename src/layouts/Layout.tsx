import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import { useEffect } from 'react';
import { loadProducts } from '../features/products/ProductsSlice';
import { useAppDispatch } from '../app/hooks';

export default function Layout(): JSX.Element {
	// const dispatch = useAppDispatch();
	// useEffect(() => {
	// 	dispatch(loadProducts());
	// }, []);

    
	return (
		<>
			<header>header</header>

			<NavBar />
			<Outlet />

			<footer>footer</footer>
		</>
	);
}
