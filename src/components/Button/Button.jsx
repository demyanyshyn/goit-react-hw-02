import s from "./Button.module.css";
const Button = ({ type, updateFeedback, feedbackReset }) => {
  const handleClick = () =>
    type === "reset" ? feedbackReset() : updateFeedback(type);

  return (
    <>
      <button onClick={handleClick} type="button" className={s[type]}>
        {type}
      </button>
    </>
  );
};

export default Button;
