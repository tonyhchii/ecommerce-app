import { createContext, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const contextValue = { cart, addToCart };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
