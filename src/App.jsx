import { useState } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  const [category, setCategory] = useState("games");
  const [page, setPage] = useState("1");
  const [time, setTime] = useState("last-thirty");

  const handleChange = (e) => {
    const dataset = e.currentTarget.dataset;
    setCategory(dataset.category);
  };
  return (
    <>
      <div className="app-container">
        <div className="app-header"></div>
        <div className="app-body">
          <Navbar onClick={handleChange}></Navbar>
          <div>
            <Outlet context={[[page, setPage], [time], [category]]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
