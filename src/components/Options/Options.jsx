import Button from "../Button/Button";
import s from "./Options.module.css";

const Options = ({
  feedback,
  updateFeedback,
  feedbackReset,
  totalFeedback,
}) => {
  const buttons = [...Object.keys(feedback), "reset"];

  return (
    <div>
      {buttons.map((item) => {
        const isReset = item === "reset";
        const handleClick = () =>
          isReset ? feedbackReset() : updateFeedback(item);

        if (!totalFeedback && isReset) {
          return;
        } else {
          return (
            <Button
              handleClick={handleClick}
              key={item}
              type={item}
              totalFeedback={totalFeedback}
              disabled={!totalFeedback && isReset}
            />
          );
        }
      })}
    </div>
  );
};

export default Options;
