import React from 'react';

class EmployeesList extends React.Component {

  render() {
    const { employees } = this.props;
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" className="filter-input" data-testid="filter-input" />
        </div>
        <ul className="employees-list">
          { employees.map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
