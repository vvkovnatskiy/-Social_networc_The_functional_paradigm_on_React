import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div className={style.imgContainer}>
        <img className={style.imgContent} src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt='panorama' />
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;