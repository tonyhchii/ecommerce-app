const CheckOutCard = ({ game }) => {
  return (
    <div className="checkout-card">
      <div className="card-top">
        <button className="x-btn">X</button>
      </div>
      <div className="card-bottom">
        <div className="checkout-img">
          <img src={game.image} alt="" />
        </div>
        <div className="card-content">
          <h3>{game.game}</h3>
          <p>${game.price}</p>
        </div>
      </div>
    </div>
  );
};
export default CheckOutCard;
