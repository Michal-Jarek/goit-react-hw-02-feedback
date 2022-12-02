import { Component } from 'react';
import PropTypes from 'prop-types';

class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleIncrement = evt => {
    const { name } = evt.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = (option1, option2, option3) => {
    return option1 + option2 + option3;
  };
  countPositiveFeedbackPercentage = (positive, total) => {
    return total > 0
      ? `${Number(Math.round((positive / total) * 100 + 'e+2') + 'e-2')}%`
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    let total = this.countTotalFeedback(good, neutral, bad);
    let percentage = this.countPositiveFeedbackPercentage(good, total);
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <button type="button" name="good" onClick={this.handleIncrement}>
            Good
          </button>
          <button type="button" name="neutral" onClick={this.handleIncrement}>
            Neutral
          </button>
          <button type="button" name="bad" onClick={this.handleIncrement}>
            Bad
          </button>
        </div>
        <div>
          <h1>Statistics</h1>
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>Total: {total}</span>
          <span>Positive feedback: {percentage}</span>
        </div>
      </div>
    );
  }
}

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stat: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export { Feedback };
