import React from 'react';

class CycleCounter extends React.Component {

  render() {
    return (
      <button
        data-testid="cycle-counter"
        style={{ fontSize: '1rem', width: 120, height: 30, }}
      >0</button>
    );
  }
}

export default CycleCounter;
