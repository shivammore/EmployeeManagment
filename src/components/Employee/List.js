import React from 'react'

function List({ employees, handleEdit, handleDelete }) {



    return (
        <div className='contain-table'>
        <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">FIRST NAME</th>
            <th scope="col">LAST NAME</th>
            <th scope="col">ID</th>
            <th scope="col">GENDER</th>
            <th scope="col">GRADE </th>
            <th scope="col">ODC/NON ODC</th>
            <th scope="col">BU</th>
            <th scope="col">PROJECT</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
        {employees.length > 0 || employees.onChange ? (
          employees.map((employee) => (
              <tr key={employee.id1}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.id1}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.grade} </td>
                  <td>{employee.odc}</td>
                  <td>{employee.BU} </td>
                  <td>{employee.project}</td>
                  <td className="text-right">
                      <button
                          onClick={() => handleEdit(employee.id)}
                          className="button muted-button"
                      >
                          Edit
                      </button>
                  </td>
                  <td className="text-left">
                      <button
                          onClick={() => handleDelete(employee.id)}
                          className="button muted-button"
                      >
                          Delete
                      </button>
                  </td>
              </tr>
          ))
      ) : (
          <tr>
              <td colSpan={7}>No Employees</td>
          </tr>
      )}
        </tbody>
      </table>
      
        </div>
    )
}

export default List