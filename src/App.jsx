import { useState } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import ShopHeader from "./Components/ShopHeader";
function App() {
  const [category, setCategory] = useState("games");
  const [page, setPage] = useState("1");
  const [time, setTime] = useState("last-thirty");
  const [title, setTitle] = useState("Last 30 Days");

  const handleChange = (e) => {
    const dataset = e.currentTarget.dataset;
    setCategory(dataset.category);
    setTime("last-thirty");
    setTitle(dataset.title);
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
