import { Component } from 'react';
import PropTypes from 'prop-types';

class Feedback extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };

  handleDecrement = () => {
    this.setState((state, props) => ({
      value: state.value - props.step,
    }));
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}


// Statistics.propTypes = {
//   title: PropTypes.string,
//   stat: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export { Feedback };