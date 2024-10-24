import ShopHeader from "../Header/ShopHeader";
import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import "./ShoppingCart.css";
import CheckOutCard from "./CheckOutCard";

const ShoppingCart = () => {
  const { cart, clearCart } = useContext(ShopContext);
  let total = 0;
  cart.forEach((game) => {
    total += game.price;
  });
  console.log(cart);
  return (
    <div>
      <ShopHeader />
      <div className="shopping-cart">
        <div className="cart-games">
          {cart.length > 0 ? (
            <>
              <h2>
                {cart.length == 1
                  ? cart.length + " Game"
                  : cart.length + " Games"}
              </h2>
              {cart.map((games) => {
                return <CheckOutCard key={games.id} game={games} />;
              })}
              <div> Total: ${total} </div>
            </>
          ) : (
            <h2>Cart is Empty</h2>
          )}
          {cart.length > 0 && (
            <div className="btn-container">
              <button className="btn" onClick={clearCart}>
                Remove All
              </button>
              <button className="btn">Checkout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
