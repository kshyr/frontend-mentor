import "./Card.css";

function Card({ category, hours, lastWeek }) {
  return (
    <div className={"card " + category}>
      <img src={`icon-${category}.svg`} />
      <div className="card-top">
        <div className="card-top-info">
          <div className="cont">
            <h3>{category.replace(/-/g, " ")}</h3>
            <div className="options">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
          <h1>{hours}hrs</h1>
          <h5>Last Week - {lastWeek}hrs</h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
