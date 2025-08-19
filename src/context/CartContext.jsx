import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = (props) => {
	const [carrito, useCarrito] = useState([{}]);
	return(
		<CarritoContext.Provider
			value={{
				carrito,
                useCarrito,
			}}
		>
			{props.children}
		</CarritoContext.Provider>
	);
}

export default CarritoProvider;
