import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CarritoContext = createContext();

const CarritoProvider = (props) => {
	const [carrito, carritoState] = useState(JSON.parse(localStorage.getItem("cart") || []));
	const useCarrito = (newCarrito) =>{
		carritoState(newCarrito);
		localStorage.setItem("cart", JSON.stringify(newCarrito));
	}
	const addToCart = (obj) => {
		let found = false;
		let newCarrito = [...carrito];
		let i = 0;
		while(i < newCarrito.length && !found){
			if(newCarrito[i].id == obj.id){
				found = true;
				newCarrito[i].amount++;
			}
			i++;
		}
		if(!found) newCarrito.push(obj);
		useCarrito(newCarrito);
	}
	const removeFromCart = (id) => {
		let newCarrito = [...carrito];
		let found = false;
		let i = 0;
		while(i < newCarrito.length && !found){
			if(newCarrito[i].id = id){
				if(newCarrito[i].amount > 1) newCarrito[i].amount--;
				else newCarrito.splice(i, 1);
				found = true;
			}
			i++;
		}
		useCarrito(newCarrito);
	}
	const clearCart = () => {
		useCarrito([]);
	}
	const getTotal = () => {
		let totalMoney = 0;
	 	for(const element of carrito) totalMoney += element.price * element.amount;
		return totalMoney;
	}
	return(
		<CarritoContext.Provider
			value={{
				carrito,
				addToCart,
				removeFromCart,
				clearCart,
				getTotal,
			}}
		>
			{props.children}
		</CarritoContext.Provider>
	);
}

CarritoProvider.propTypes = {
	props: PropTypes.element,
}

export default CarritoProvider;