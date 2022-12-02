
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    
    {options.map(option => (
      <button type="button" name={option} onClick={onLeaveFeedback}>
        {option.substring(0, 1).toUpperCase() + option.substring(1)}
      </button>
    ))}
  </>
);
export default FeedbackOptions;
