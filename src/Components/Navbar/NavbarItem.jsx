import { Link } from "react-router-dom";
const NavbarItem = ({ children, onClick, title, category, time }) => {
  const link = "/" + category;
  return (
    <Link
      to={link}
      data-category={category}
      data-title={title}
      data-time={time}
      onClick={onClick}
    >
      <div className="svg-container">{children}</div>
      {title}
    </Link>
  );
};

export default NavbarItem;
