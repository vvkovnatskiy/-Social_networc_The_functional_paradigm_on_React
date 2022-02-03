import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.logo} src='https://www.xnview.com/img/app-xnsoft-360.png' />
    </header>
  );
}

export default Header;