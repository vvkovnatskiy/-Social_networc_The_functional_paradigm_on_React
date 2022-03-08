import style from './MyPosts.module.css';
import Post from './Post/Post';
import logo from './Kitten-min.png';

const MyPosts = () => {

  let postsData = [
    { id: 1, nickName: 'Ivan', message: 'Hi, how are you?', likesCount: 15, },
    { id: 2, nickName: 'Huan', message: 'Hi, I am fun. And you?', likesCount: 12, },
    { id: 3, nickName: 'Sergio', message: "I'm OK", likesCount: 9, },
    { id: 4, nickName: 'Vladlen', message: '...something', likesCount: 23, },
    { id: 5, nickName: 'Oleg', message: '...something', likesCount: 19, },
    { id: 6, nickName: 'Jon', message: '...something', likesCount: 15, },
  ]

  return (
    <div>
      <div className={style.myPost}>
        <div className={style.logoContainer}>
          <img className={style.logo} src={logo} alt='logo' />
        </div>
        <h3>My Posts</h3>
        <div>
          <textarea></textarea>
          <div>
            <button>Add post</button>
          </div>
        </div>
      </div>
      <div className={style.posts}>
        {postsData.map(item => {
          return <Post nickName={item.nickName} message={item.message} likesCount={item.likesCount} />
        })}
      </div>
    </div>
  );
}

export default MyPosts;