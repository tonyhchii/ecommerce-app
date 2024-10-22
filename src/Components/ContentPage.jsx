import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import GameCard from "./GameCard";
import "./ContentPage.css";

const ContentPage = () => {
  const [page, time] = useOutletContext();
  const [data, setData] = useState(null);
  const key = "key=b0049c0ad6f74aa18628ce91dcd569fd";
  useEffect(() => {
    let ignore = false;
    const dateString = getDateString(time);
    console.log(dateString);
    fetch(`https://api.rawg.io/api/${page}?${dateString}&${key}`)
      .then((response) => {
        return response.json();
      })
      .then((obj) => {
        if (!ignore) {
          console.log(obj);
          setData(obj);
        }
      });

    return () => {
      ignore = true;
    };
  }, [page, time]);

  return (
    <div className="content-container">
      <h1>{page}</h1>
      {data && (
        <div className="games-container">
          {data.results.map((game) => {
            return <GameCard game={game} key={game.id} />;
          })}
        </div>
      )}
    </div>
  );
};

function getDateString(time) {
  const todayDate = new Date();
  let startDate = "";
  let endDate = "";
  switch (time) {
    case "last-thirty": {
      startDate = `${todayDate.getYear()}-${
        todayDate.getMonth() - 1
      }-${todayDate.getDay()}`;
      endDate = `${todayDate.getYear()}-${todayDate.getMonth()}-${todayDate.getDay()}`;
      break;
    }
    default: {
      startDate = `${todayDate.getFullYear()}-01-01`;
      endDate = `${todayDate.getFullYear()}-12-31`;
      break;
    }
  }
  const dateString = `dates=${startDate},${endDate}`;

  return dateString;
}

export default ContentPage;
