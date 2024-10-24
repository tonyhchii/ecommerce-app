import "./ShopHeader.css";
import { Link } from "react-router-dom";
import shoppingCart from "../../Assets/shopping-cart.svg";
import searchIcon from "../../Assets/search-icon.svg";
const ShopHeader = () => {
  return (
    <div className="shop-header">
      <div className="logo">
        <h1>Game Shop</h1>
      </div>

      <div className="header-right">
        <div className="search-bar">
          <input type="text" />
          <button>
            <img src={searchIcon} alt="Search Icon" />
          </button>
        </div>
        <Link to="/cart">
          <div className="cart">
            <img src={shoppingCart} alt="Shopping Cart" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ShopHeader;
