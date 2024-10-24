import { Link } from "react-router-dom";
const HomePageButton = ({ children, title, time }) => {
  return (
    <Link className="btn" to="/games" state={{ title: title, time: time }}>
      {children}
      {title}
    </Link>
  );
};

export default HomePageButton;
