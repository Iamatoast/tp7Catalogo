import React, { createContext, useState, FC, ReactNode } from "react";

interface Objeto{
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  amount: number;
}

interface CarritoContextType {
	carrito: Objeto[],
	addToCart: (obj: Objeto) => void,
	removeFromCart: (id: number) => void,
	clearCart: () => void,
	getTotal: () => number;
}

export const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

const CarritoProvider: FC<{children: ReactNode}> = ({ children }) => {
	const [carrito, carritoState] = useState<Objeto[]>(JSON.parse(localStorage.getItem("cart") || ""));
	const useCarrito = (newCarrito: Objeto[]) =>{
		carritoState(newCarrito);
		localStorage.setItem("cart", JSON.stringify(newCarrito));
	}
	const addToCart = (obj: Objeto) => {
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
	const removeFromCart = (id : number) => {
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
			{children}
		</CarritoContext.Provider>
	);
}

export default CarritoProvider;