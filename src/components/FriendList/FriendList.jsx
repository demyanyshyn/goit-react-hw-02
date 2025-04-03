import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={s.FriendListContainer}>
      <ul className={s.FriendList}>
        {friends.map((item) => {
          return <FriendListItem key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
};

export default FriendList;
