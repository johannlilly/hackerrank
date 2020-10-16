import React from 'react';

class Articles extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="pagination">
          <button data-testid="page-button" key="page-button-1">1</button>
          <button data-testid="page-button" key="page-button-2">2</button>
        </div>
        <ul className="results">
          <li key="title-1" data-testid="result-row">Example title 1</li>
          <li key="title-2" data-testid="result-row">Example title 2</li>
          <li key="title-3" data-testid="result-row">Example title 3</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Articles;
