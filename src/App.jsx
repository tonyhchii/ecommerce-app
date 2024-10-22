import { useState } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  const [page, setPage] = useState("games");
  const [time, setTime] = useState("last-thirty");

  const changePage = (e) => {
    const dataset = e.currentTarget.dataset;
    setPage(dataset.page);
  };
  return (
    <>
      <div className="app-container">
        <div className="app-header"></div>
        <div className="app-body">
          <Navbar onClick={changePage}></Navbar>
          <div>
            <Outlet context={[[page], [time]]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
