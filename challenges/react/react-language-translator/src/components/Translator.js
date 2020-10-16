import React from 'react';

class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { word: '' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.translations.has(event.target.value)
    ? this.setState({word: this.props.translations.get(event.target.value)})
    : this.setState({word: ''})
  }
  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input type="text" className="text-input" data-testid="text-input" onChange={this.handleChange} />
          </div>
          <div className="input-container">
            <span>output:</span>
            <input type="text" className="text-output" data-testid="text-output" value={this.state.word} readOnly />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
