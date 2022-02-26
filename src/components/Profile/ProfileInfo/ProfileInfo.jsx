import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={style.imgContainer}>
      <img className={style.imgContent} src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt='panorama' />
    </div>
  );
}

export default ProfileInfo;