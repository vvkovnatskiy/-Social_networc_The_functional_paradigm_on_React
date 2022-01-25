import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div className={s.logo_container}>
        <img className={s.logo} src='http://filestack.itcraftlab.com/wp-content/uploads/2018/05/Kitten-min.png' />
      </div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
}

export default MyPosts;