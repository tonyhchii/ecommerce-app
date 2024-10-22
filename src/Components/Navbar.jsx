import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = ({ onClick }) => {
  return (
    <div>
      <h2>New Releases</h2>
      <ul>
        <li>
          <Button onClick={onClick} page="games">
            <Link to="/LastThirty">Last 30 Days </Link>
          </Button>
        </li>
        <li>
          <Button>This Week</Button>
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
