import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={style.dialog}>  <NavLink to={props.id}> {props.name} </NavLink>  </div>
  );
}

const Message = (props) => {
  return (
    <div className={style.message}>{props.message}</div>
  );
}

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem id='1' name='User1' />
        <DialogItem id='2' name='User2' />
        <DialogItem id='3' name='User3' />
        <DialogItem id='4' name='User4' />
        <DialogItem id='5' name='User5' />
        <DialogItem id='6' name='User6' />
        <DialogItem id='7' name='User7' />
      </div>
      <div className={style.messages}>
        <Message message='Hi' />
        <Message message='How are you?' />
        <Message message="I'm fine" />
      </div>
    </div>
  );
}

export default Dialogs;