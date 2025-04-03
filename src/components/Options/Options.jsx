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
      {buttons.map((item) => (
        <Button
          updateFeedback={updateFeedback}
          feedbackReset={feedbackReset}
          key={item}
          type={item}
          totalFeedback={totalFeedback}
        />
      ))}

      {/* <Button
        key="reset"
        type="reset"
        updateFeedback={updateFeedback}
        feedbackReset={feedbackReset}
      /> */}
    </div>
  );
};

export default Options;
