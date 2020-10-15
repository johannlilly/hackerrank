import React from 'react';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    
    // set initial state
    this.state = {
      temp: '',
      value: '',
      store: 'REPLACE ME WITH CURRENT TEXT CONTENT'
    }

    // bind how to handle changes in state
    this.handleInput = this.handleInput.bind(this);
    this.handleAppend = this.handleAppend.bind(this);
    this.handleUndo = this.handleUndo.bind(this);    
  }
  handleInput(event) {
    this.setState({ value: event.target.value});
  }
  handleAppend() {
    return this.state.value !== ''
    ? this.setState({
        temp: this.state.store,
        store: `${this.state.store} ${this.state.value}`,
        value: '' })
    : null
  }
  handleUndo() {
    return this.state.temp !== ''
    ? this.setState({
        store: this.state.temp,
        temp: '' })
    : null
  }
  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <input className="word-input" type="text" data-testid="word-input" value={this.state.value} onChange={this.handleInput} />
          <button data-testid="append-button" onClick={this.handleAppend} disabled={this.state.value === '' ? "disabled" : ""} >Append</button>
          <button data-testid="undo-button" onClick={this.handleUndo} disabled={this.state.temp === '' ? "disabled" : ""} >Undo</button>
        </div>
        <div className="text-field" data-testid="text-field">{this.state.store}</div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
