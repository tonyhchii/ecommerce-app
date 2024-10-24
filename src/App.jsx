import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import ShopHeader from "./Components/Header/ShopHeader";
function App() {
  let data = useLocation().state;
  const [category, setCategory] = useState("games");
  const [page, setPage] = useState("1");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("Top Games of All Time");

  useEffect(() => {
    if (data) {
      setTitle(data.title);
    }
  }, [data]);

  const handleChange = (e) => {
    const data = e.currentTarget.dataset;
    setCategory(data.category);
    setTime(data.time);
    setTitle(data.title);
    setPage("1");
  };
  return (
    <>
      <div className="app-container">
        <ShopHeader />
        <div className="app-body">
          <Navbar onClick={handleChange}></Navbar>
          <div>
            <Outlet context={[[page, setPage], [time], [category], [title]]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
