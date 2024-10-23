import Button from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onClick }) => {
  return (
    <div className="navbar">
      <h2>New Releases</h2>
      <ul>
        <li>
          <Button onClick={onClick} category="games">
            <Link to="/games">Last 30 Days </Link>
          </Button>
        </li>
        <li>
          <Link to="/games" data-category="games" onClick={onClick}>
            This Week
          </Link>
        </li>
        <li>
          <Button>Upcoming</Button>
        </li>
      </ul>

      <h2>Top</h2>
      <ul>
        <li>
          <Button>This Year</Button>
        </li>
        <li>
          <Button>All Time</Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
