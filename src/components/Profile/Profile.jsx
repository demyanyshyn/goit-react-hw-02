import clsx from "clsx";
import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profileContainer}>
      <div className={s.profileTop}>
        <img className={s.profileImg} src={image} alt="User avatar" />
        <p className={clsx(s.bold, s.black)}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.profileList}>
        <li className={s.profileItem}>
          <span>Followers</span>
          <span className={s.bold}>{stats.followers}</span>
        </li>
        <li className={s.profileItem}>
          <span>Views</span>
          <span className={s.bold}>{stats.views}</span>
        </li>
        <li className={s.profileItem}>
          <span>Likes</span>
          <span className={s.bold}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
