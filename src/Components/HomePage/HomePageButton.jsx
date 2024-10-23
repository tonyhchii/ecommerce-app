import { Link } from "react-router-dom";
const HomePageButton = ({ children, title }) => {
  return (
    <Link className="btn" to="/games" state={{ title: title }}>
      {children}
      {title}
    </Link>
  );
};

export default HomePageButton;
