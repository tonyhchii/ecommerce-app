import "./ShopHeader.css";
import shoppingCart from "../Assets/shopping-cart.svg";
import searchIcon from "../Assets/search-icon.svg";
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
        <div className="cart">
          <img src={shoppingCart} alt="Shopping Cart" />
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
