import '../styles/card.css';

const Card = ({ title, children }) => {
  return (
    <div className="proyecto-div-card div-exterior">
      <div className="interior-card">{children}</div>
      <p className="nombre-card">{title}</p>
    </div>
  );
};

export default Card;
