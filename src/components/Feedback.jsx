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
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  // handleIncrement = whichButton => {
  //   switch (whichButton) {
  //     case 'good':
  //       this.setState(prevState => ({
  //         good: prevState.good + 1,
  //       }));
  //       break;
  //     case 'neutral':
  //       this.setState(prevState => ({
  //         neutral: prevState.neutral + 1,
  //       }));
  //       break;
  //     case 'bad':
  //       this.setState(prevState => ({
  //         bad: prevState.bad + 1,
  //       }));
  //       break;
  //     default:
  //       return 0;
  //   }
  // };

  render() {
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
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
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
