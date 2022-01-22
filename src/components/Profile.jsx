import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.img_container}>
        <img className={s.img_content} src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
      </div>
      <div className={s.logo_container}>
        <img className={s.logo} src='http://filestack.itcraftlab.com/wp-content/uploads/2018/05/Kitten-min.png' />
      </div>
      <div>
        Posts
        <div>New post</div>
        <div>
        <div>post 1</div>
        <div>post 2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;