import { createContext, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const contextValue = { cart, addToCart, clearCart, deleteItem };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
