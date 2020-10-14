import React from 'react';

class CycleCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.state.value === this.props.cycle - 1
    ? this.setState({value: 0})
    : this.setState({value: this.state.value + 1});
  }
  render() {
    return (
      <button
        data-testid="cycle-counter"
        style={{ fontSize: '1rem', width: 120, height: 30, }}
        onClick={this.handleClick}
      >{this.state.value}</button>
    );
  }
}

export default CycleCounter;
