import { useState } from 'react';
import '../stylesMinis/contador.css';

const Contador = () => {
  const [cuenta, setCuenta] = useState(0);

  return (
    <>
      <section className="section1">
        <button className="boton-sum-clics" onClick={() => setCuenta(cuenta + 1)}>
          ¡Súmame!
        </button>
        <button className="boton-sum-clics" onClick={() => setCuenta(Math.max(cuenta - 1, 0))}>
          ¡Réstame!
        </button>
      </section>
      <p className="p-sum-clics">{cuenta}</p>
    </>
  );
};

export default Contador;
