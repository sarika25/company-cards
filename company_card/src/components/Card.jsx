const Card = (props) => {
  return (
    <div className="card">
      <div>
        <div className="header">
          <img src={props.brandLogo} alt="abc" />
          <button>Save 𖤘</button>
        </div>
        <div className="body">
          <h3>
            {props.companyName} <span>{props.datePosted}</span>
          </h3>
          <h2>{props.post}</h2>
          <p>
            <span>{props.tag1}</span>
            <span>{props.tag2}</span>
          </p>
        </div>
      </div>

      <div className="footer">
        <h4>
          {props.pay} <span>{props.location}</span>
        </h4>
        <button>Apply now</button>
      </div>
    </div>
  );
};

export default Card;
