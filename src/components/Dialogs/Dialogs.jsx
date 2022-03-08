import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={style.dialog}>  <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>  </div>
  );
}

const Message = (props) => {
  return (
    <div className={style.message}>{props.message}</div>
  );
}


const Dialogs = () => {

  let dialogsData = [
    { id: 1, name: 'User1', },
    { id: 2, name: 'User2', },
    { id: 3, name: 'User3', },
    { id: 4, name: 'User4', },
    { id: 5, name: 'User5', },
    { id: 6, name: 'User6', },
    { id: 7, name: 'User7', }
  ]

  let messagesData = [
    { id: 1, message: 'Hi', },
    { id: 2, message: 'How are you?', },
    { id: 3, message: "I'm fine", },
    { id: 4, message: 'Ok', },
  ]

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsData.map(item => {
          return <DialogItem name={item.name} id={item.id} />
        })}
      </div>
      <div className={style.messages}>
        {messagesData.map(item => {
          return <Message message={item.message} />
        })}
      </div>
    </div>
  );
}

export default Dialogs;