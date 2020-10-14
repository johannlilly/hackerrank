import React from 'react';

class EmployeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    const { employees } = this.props;
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" className="filter-input" data-testid="filter-input" value={this.state.value} onChange={this.handleChange} />
        </div>
        <ul className="employees-list">
          { employees.map(employee => (
            this.state.value === ''
            ? <li key={employee.name} data-testid="employee">{employee.name}</li>
            : employee.name.toUpperCase().includes(this.state.value.toUpperCase())
              ? <li key={employee.name} data-testid="employee">{employee.name}</li>
              : null
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
