import { NavLink } from 'react-router-dom';

export default function NavBar(): JSX.Element {
	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<NavLink to="counter">Counter</NavLink>
			<NavLink to="create-product">Create new product</NavLink>
			<NavLink to="products">Products</NavLink>
		</div>
	);
}
