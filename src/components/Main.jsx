import Card from './Card';
import Follow from '../minis/Follow'
import Contador from '../minis/Contador';
import '../styles/card.css';
import '../styles/mainbody.css';

const Main = () => {
  return (
    <main>
      <section>
        <div className="container-proyectos">
          <Card title={'Contador de clics 🖱️'}>
            <Contador />
          </Card>
          <Card title={'Seguir / Dejar de seguir 🕵🏽‍♀️'}>
            <Follow />
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Main;
