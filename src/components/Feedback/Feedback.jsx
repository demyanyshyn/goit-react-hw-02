import s from "./Feedback.module.css";
const Feedback = ({ feedback, statistic }) => {
  return (
    <div>
      {Object.entries(feedback).map(([key, value]) => (
        <p key={key}>
          <span>{key}:</span>
          <span>{value}</span>
        </p>
      ))}

      {Object.entries(statistic).map(([key, item]) => (
        <p key={key}>
          <span>{key}:</span>
          <span>{item}</span>
        </p>
      ))}
    </div>
  );
};

export default Feedback;
