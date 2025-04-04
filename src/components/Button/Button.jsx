import s from "./Button.module.css";
const Button = ({ type, handleClick }) => {
  return (
    <>
      <button onClick={handleClick} type="button" className={s[type]}>
        {type}
      </button>
    </>
  );
};

export default Button;
