import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.item}>
      <div className={style.leftBlock}>
        <div className={style.privateInfo}>
          <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' alt='Avatar' />
          <div>
            <p>Nickname:</p>
            <p>{props.nickName}</p>
          </div>
        </div>
        <div>
          <span>{props.message}</span>
        </div>
      </div>
      <div className={style.like_post}>
        <button>Like</button><span>: {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;