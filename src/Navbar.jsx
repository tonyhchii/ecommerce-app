import Button from "./Button";

const Navbar = () => {
  return (
    <div>
      <h2>New Releases</h2>
      <ul>
        <li>
          <Button>Last 30 Days</Button>
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
