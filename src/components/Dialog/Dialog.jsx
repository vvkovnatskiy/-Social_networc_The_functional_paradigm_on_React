import { NavLink } from 'react-router-dom';
import style from './Dialog.module.css';

const Dialog = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.dialog}>  <NavLink to='User1'> User 1 </NavLink>  </div>
        <div className={style.dialog}>  <NavLink to='User2'> User 2 </NavLink>  </div>
        <div className={style.dialog}>  <NavLink to='User3'> User 3 </NavLink>  </div>
        <div className={style.dialog}>  <NavLink to='User4'> User 4 </NavLink>  </div>
        <div className={style.dialog}>  <NavLink to='User5'> User 5 </NavLink>  </div>
        <div className={style.dialog}>  <NavLink to='User6'> User 6 </NavLink>  </div>
        <div className={style.dialog}>  <NavLink to='User7'> User 7 </NavLink>  </div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hi</div>
        <div className={style.message}>How are you</div>
        <div className={style.message}>I'm fine</div>
      </div>
    </div>
  );
}

export default Dialog;