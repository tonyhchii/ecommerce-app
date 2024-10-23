import { Link } from "react-router-dom";
const NavbarItem = ({ children, onClick, title, category }) => {
  return (
    <Link
      to="/games"
      data-category={category}
      data-title={title}
      onClick={onClick}
    >
      <div className="svg-container">{children}</div>
      {title}
    </Link>
  );
};

export default NavbarItem;
