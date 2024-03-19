import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id1;

   

    const[firstName,setFirstName]=useState(selectedEmployee.firstName);
    const[lastName,setLastName]=useState(selectedEmployee.lastName);
    const[id1,setId]=useState(selectedEmployee.id1);
    const[gender,setGender]=useState(selectedEmployee.gender);
    const[grade,setGrade]=useState(selectedEmployee.grade);
    const[odc,setOdc]=useState(selectedEmployee.odc);
    const[BU,setBU]=useState(selectedEmployee.BU);
    const[project,setProject]=useState(selectedEmployee.project);
    const handleUpdate = e => {
        e.preventDefault();

      

        const employee = {
            firstName,
            lastName,
            id1,
            gender,
            grade,
            odc,
            BU,
            project
        }

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id1 === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <div className="form-group">
                                <label htmlFor="exampleInputEmail1">FIRST NAME</label>
                                <input type="text" value={firstName}  onChange={e=>{setFirstName(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">LAST NAME</label>
                                <input type="text" value={lastName} onChange={e=>{setLastName(e.target.value)}} className="form-control" id="exampleInputPassword1" placeholder="Last Name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">ID</label>
                                <input type="number" value={id} onChange={e=>{setId(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ID" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <select value={gender} onChange={e=>{var select=document.getElementById("gender");
                                var option = select.options[select.selectedIndex];
                                setGender(option.value);}} id="gender" className="form-control">
                                    <option selected>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="grade">Grade</label>
                                <select  onChange={e=>{var select=document.getElementById("grade");
                                var option = select.options[select.selectedIndex];
                                setGrade(option.value);}} id="grade" className="form-control">
                                    <option selected>Select Grade</option>
                                    <option>3.1x</option>
                                    <option>3.2x</option>
                                    <option>3.3x</option>
                                    <option>4.0x</option>
                                </select>

                            </div>
                            <div className="form-group">
                                <label htmlFor="odc">ODC/NON ODC</label>
                                <select onChange={e=>{var select=document.getElementById("odc");
                                var option = select.options[select.selectedIndex];
                                setOdc(option.value);}} id="odc" className="form-control">
                                    <option selected>ODC</option>
                                    <option>NON ODC</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">BU</label>
                                <input value={BU} type="text"onChange={e=>{setBU(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter BU" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Project</label>
                                <input value={project} type="text" onChange={e=>{setProject(e.target.value)}} className="form-control" id="exampleInputPassword1" placeholder="Enter Project" />
                            </div>
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit