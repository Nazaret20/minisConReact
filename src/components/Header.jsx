import '../styles/header.css';
import svgReact from '../assets/react.svg';

const Header = () => {
  return (
    <header>
      <h1>Mini proyectos con React</h1>
      <img className="svg-react" src={svgReact} alt="React logo" />
    </header>
  );
};

export default Header;
