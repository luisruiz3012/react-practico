import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext'
import '../styles/MyOrder.scss';

import flechita from '@icons/flechita.svg'

const MyOrder = () => {
	const { state, hideOrder } = useContext(AppContext)

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price
		const sum = state.cart.reduce(reducer, 0)
		return sum
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				<div className="order-items">
					{state.cart.map(product => (
						<OrderItem product={product} key={`orderItem-${product.id}`} />
					))}
				</div>
				<div className="order-total">
					<div className="order">
						<p>
							<span>Total</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
					<button className="primary-button">
						Checkout
					</button>
				</div>
			</div>
		</aside>
	);
}

export default MyOrder;
