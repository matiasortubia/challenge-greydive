import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <Link className={ styles.linkInicio } to="/">Inicio</Link>
    </header>
  );
};

export { Header };
