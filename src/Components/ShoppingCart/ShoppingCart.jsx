import ShopHeader from "../Header/ShopHeader";
import { useContext } from "react";
import { ShopContext } from "../ShopContext";

const ShoppingCart = () => {
  const { cart } = useContext(ShopContext);
  console.log(cart);
  return (
    <div>
      <ShopHeader />
      <div>
        <div>
          {cart.map((games) => {
            return <h3 key={games.id}>{games.game}</h3>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
