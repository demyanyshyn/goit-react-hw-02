import s from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={s.item}>
      <img src={avatar} alt={name} className={s.itemImage} />
      <p className={s.itemName}>{name}</p>
      {isOnline ? (
        <p className={s.online}>Online</p>
      ) : (
        <p className={s.ofline}>Ofline</p>
      )}
    </li>
  );
};

export default FriendListItem;
