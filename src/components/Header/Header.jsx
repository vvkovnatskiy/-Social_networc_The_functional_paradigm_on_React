import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src='https://www.xnview.com/img/app-xnsoft-360.png' />
    </header>
  );
}

export default Header;