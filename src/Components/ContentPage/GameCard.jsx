import "./GameCard.css";
const GameCard = ({ game }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={game.background_image} alt="" />
      </div>
      <div className="cardContent">
        <h2>{game.name}</h2>
      </div>
    </div>
  );
};

export default GameCard;
