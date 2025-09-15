// import { createContext, useContext, useReducer } from "react";

// const CartContext = createContext();


// // Reducer function to update state

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const existingItem = state.cart.find(item => item._id === action.payload._id);
//       if (existingItem) {
//         return {
//           ...state,
//           cart: state.cart.map(item =>
//             item._id === action.payload._id ? { ...item, quantity: item.quantity + 1 } : item
//           )
//         };
//       } else {
//         return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
//       }

//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         cart: state.cart.filter(item => item._id !== action.payload),
//       };

//     case "CLEAR_CART":
//       return {
//         ...state,
//         cart: [],
//       };

//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, { cart: [] });

//   return (
//     <CartContext.Provider value={{ cart: state.cart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);


import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Add to Cart
  const addToCart = (product) => {
    const exists = cartItems.find((item) => item._id === product._id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  // Update Quantity
  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Clear Cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => useContext(CartContext);
