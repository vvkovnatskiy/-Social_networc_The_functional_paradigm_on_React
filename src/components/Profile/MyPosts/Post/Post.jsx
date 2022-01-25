import s from './Post.module.css';

const Post = () => {
  return (
      <div className={s.item}>
      <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'/>
        post 1
        <div><span>like</span></div>
      </div>
  );
}

export default Post;