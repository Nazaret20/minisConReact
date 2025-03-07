import { useState } from 'react';
import '../stylesMinis/follow.css';

const Follow = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <section className="section2">
      <button
        className={isFollowing ? "boton-seguir is-following" : "boton-seguir"}
        onClick={() => setIsFollowing(!isFollowing)}
      >
        <span className="texto-seguir">Seguir</span>
        <span className="texto-siguiendo">Siguiendo</span>
        <span className="texto-dejar-seguir">Dejar de seguir</span>
      </button>
    </section>
  );
};

export default Follow;