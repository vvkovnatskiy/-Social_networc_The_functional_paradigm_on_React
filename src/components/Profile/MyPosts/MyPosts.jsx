import style from './MyPosts.module.css';
import Post from './Post/Post';
import logo from './Kitten-min.png';

const MyPosts = () => {
  return (
    <div>
      <div className={style.myPost}>
        <div className={style.logoContainer}>
          <img className={style.logo} src={logo} alt='logo' />
        </div>
        My Posts
        <div>
          <textarea></textarea>
          <div>
            <button>Add post</button>
          </div>
        </div>
      </div>
      <div className={style.posts}>
        <Post nickName='Ivan' message='Hi, how are you?' nOfL='15' />
        <Post nickName='Huan' message='Hi, I am fun. And you?' nOfL='12' />
        <Post nickName='Sergio' message='...something' nOfL='9' />
        <Post nickName='Vladlen' message='...something' nOfL='23' />
        <Post nickName='Oleg' message='...something' nOfL='19' />
        <Post nickName='Jon' message='...something' nOfL='15' />
      </div>
    </div>
  );
}

export default MyPosts;