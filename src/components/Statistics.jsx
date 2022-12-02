

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="statistics" >
    <h1>Statistics</h1>
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
    <span>Total: {total}</span>
    <span>Positive feedback: {positivePercentage}</span>
  </div>
);

export default Statistics;