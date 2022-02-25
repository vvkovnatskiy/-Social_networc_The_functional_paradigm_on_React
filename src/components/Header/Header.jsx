import style from './Header.module.css';
import logo from './app-xnsoft-360.png';

const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.logo} src={logo} alt='logo' />
    </header>
  );
}

export default Header;