import { ShopContext } from "../ShopContext";
import "./GameCard.css";
import { useState, useContext } from "react";
const GameCard = ({ game }) => {
  const { addToCart } = useContext(ShopContext);
  const [addedToCart, setAddedToCart] = useState(false);
  const onClick = () => {
    setAddedToCart(!addedToCart);
    addToCart({ id: game.id, game: game.name, price: 59.99 });
  };
  return (
    <div className="card">
      <div className="card-img">
        {game.background_image ? (
          <img src={game.background_image} alt="" />
        ) : (
          <div> Loading </div>
        )}
      </div>
      <div className="card-content">
        <div className="price-header">
          <p>$59.99</p>
          <button onClick={onClick}>
            {!addedToCart ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="1rem"
              >
                <circle cx="7" cy="22" r="2" />
                <circle cx="17" cy="22" r="2" />
                <path d="M23,3H21V1a1,1,0,0,0-2,0V3H17a1,1,0,0,0,0,2h2V7a1,1,0,0,0,2,0V5h2a1,1,0,0,0,0-2Z" />
                <path d="M21.771,9.726a.994.994,0,0,0-1.162.806A3,3,0,0,1,17.657,13H5.418l-.94-8H13a1,1,0,0,0,0-2H4.242L4.2,2.648A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.829-2H17.657a5,5,0,0,0,4.921-4.112A1,1,0,0,0,21.771,9.726Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="1rem"
              >
                <circle cx="7" cy="22" r="2" />
                <circle cx="17" cy="22" r="2" />
                <path d="M23.685,1.336a1,1,0,0,0-1.414,0L17.112,6.5,15.561,4.881a1,1,0,0,0-1.442,1.386l1.614,1.679a1.872,1.872,0,0,0,1.345.6h.033a1.873,1.873,0,0,0,1.335-.553L23.685,2.75A1,1,0,0,0,23.685,1.336Z" />
                <path d="M21.9,9.016a1,1,0,0,0-1.162.807l-.128.709A3,3,0,0,1,17.657,13H5.418l-.94-8H11a1,1,0,0,0,0-2H4.242L4.2,2.648A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.829-2H17.657a5,5,0,0,0,4.921-4.113l.128-.71A1,1,0,0,0,21.9,9.016Z" />
              </svg>
            )}
          </button>
        </div>
        <h2>{game.name}</h2>
      </div>
    </div>
  );
};

export default GameCard;
