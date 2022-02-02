import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div className={s.myPost}>
        <div className={s.logo_container}>
          <img className={s.logo} src='http://filestack.itcraftlab.com/wp-content/uploads/2018/05/Kitten-min.png' />
        </div>
        My Posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post nickName='Ivan' message='Hi, how are you?' nOfL='15'/>
        <Post nickName='Huan' message='Hi, I am fun. And you?' nOfL='12'/>
        <Post nickName='Sergio' message='...something' nOfL='9'/>
        <Post nickName='Vladlen' message='...something' nOfL='23'/>
        <Post nickName='Oleg' message='...something' nOfL='19'/>
        <Post nickName='Jon' message='...something' nOfL='15'/>
        <Post nickName='Jesus' message='...something' nOfL='15'/>
      </div>
    </div>
  );
}

export default MyPosts;