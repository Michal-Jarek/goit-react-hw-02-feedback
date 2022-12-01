import { Component } from 'react';

const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

class Toggle extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  // Metoda, którą będziemy przekazywać do przycisku
  updateMessage = evt => {
    console.log(evt); // Dostępny obiekt zdarzenia w odwołaniu onClick

    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <>
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
      </>
    );
  }
}
export { Toggle };