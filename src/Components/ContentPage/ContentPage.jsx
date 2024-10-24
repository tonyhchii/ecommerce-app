import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import GameCard from "./GameCard";
import "./ContentPage.css";

const ContentPage = () => {
  const [[page, setPage], time, category, title] = useOutletContext();
  const [data, setData] = useState(null);
  const key = "key=b0049c0ad6f74aa18628ce91dcd569fd";
  const dateString = getDateString(time);
  const url = `https://api.rawg.io/api/${category}?${dateString}&${key}&page=${page}`;

  const nextPage = () => {
    setPage(parseInt(page) + 1);
  };
  const lastPage = () => {
    setPage(parseInt(page) - 1);
  };
  useEffect(() => {
    let ignore = false;

    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((obj) => {
        if (!ignore) {
          setData(obj);
        }
      });

    return () => {
      ignore = true;
    };
  }, [url]);

  return (
    <div className="content-container">
      <h1>{title}</h1>
      {data && (
        <div>
          <div className="games-container">
            {data.results.map((game) => {
              return <GameCard game={game} key={game.id} />;
            })}
          </div>
          <div className="btn-container">
            {data.previous && (
              <button className="btn" onClick={lastPage}>
                Prev Page
              </button>
            )}
            {data.next && (
              <button className="btn" onClick={nextPage}>
                Next Page
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

function getDateString(time) {
  const todayDate = new Date();
  const thisMonth = todayDate.getMonth();
  const thisDay = todayDate.getDate();
  const thisYear = todayDate.getFullYear();
  let startDate = "";
  let endDate = "";
  switch (time) {
    case "next": {
      startDate = `${thisYear}-${convertDigit(thisMonth)}-${convertDigit(
        thisDay
      )}`;
      endDate = `${thisYear}-${convertDigit(thisMonth + 1)}-${convertDigit(
        thisDay
      )}`;
      break;
    }
    case "week": {
      startDate = `${thisYear}-${convertDigit(thisMonth)}-${
        thisDay - 7 > 0 ? convertDigit(thisDay - 7) : "01"
      }`;
      endDate = `${todayDate.getFullYear()}-${convertDigit(
        thisMonth
      )}-${convertDigit(thisDay)}`;
      break;
    }
    case "month": {
      startDate = `${thisYear}-${convertDigit(thisMonth - 1)}-${convertDigit(
        thisDay
      )}`;
      endDate = `${todayDate.getFullYear()}-${convertDigit(
        thisMonth
      )}-${convertDigit(thisDay)}`;
      break;
    }
    case "year": {
      startDate = `${thisYear}-01-01`;
      endDate = `${thisYear}-12-31`;
      break;
    }
    default: {
      startDate = `1975-01-01`;
      endDate = `${todayDate.getFullYear()}-12-31`;
      break;
    }
  }
  const dateString = `dates=${startDate},${endDate}`;

  return dateString;
}

function convertDigit(digit) {
  const newDigit = digit + 1;
  return newDigit < 10 ? "0" + newDigit : "" + newDigit;
}

export default ContentPage;
