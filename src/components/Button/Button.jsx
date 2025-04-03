import s from "./Button.module.css";
const Button = ({ type, updateFeedback, feedbackReset, totalFeedback }) => {
  const isReset = type === "reset";
  const handleClick = () => (isReset ? feedbackReset() : updateFeedback(type));
  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className={s[type]}
        disabled={!totalFeedback && isReset}
      >
        {type}
      </button>
    </>
  );
};

export default Button;
