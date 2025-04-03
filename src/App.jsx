import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import { useState, useEffect } from "react";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("savedFeedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("savedFeedback", JSON.stringify(feedback));
  }, [feedback]);

  let { good, neutral, bad } = feedback;

  let totalFeedback = good + neutral + bad;
  let percentageGoodFeedback = Math.round((good / totalFeedback) * 100);

  let statistic = {
    Total: totalFeedback,
    Positive: percentageGoodFeedback + "%",
  };
  const feedbackReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  return (
    <>
      <Description
        name="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        updateFeedback={updateFeedback}
        feedbackReset={feedbackReset}
        feedback={feedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback statistic={statistic} feedback={feedback} />
      ) : (
        <Notification />
      )}
    </>
  );
};
export default App;
