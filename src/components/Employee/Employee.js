import React,{useState,useRef,useEffect} from "react";
import employeesData from '../../data/index'
import Swal from 'sweetalert2';
import Edit from "./Edit";
function Employee() {

       const[firstName,setFirstName]=useState("");
       const[lastName,setLastName]=useState("");
       const[id1,setId]=useState("");
       const[gender,setGender]=useState("");
       const[grade,setGrade]=useState("");
       const[odc,setOdc]=useState("");
       const[BU,setBU]=useState("");
       const[project,setProject]=useState("");
       const [employees, setEmployees] = useState(employeesData);
       const textInput = useRef(null);
       const [isEditing, setIsEditing] = useState(false);
       const [selectedEmployee, setSelectedEmployee] = useState(null);


       useEffect(() => {
           textInput.current.focus();
       }, [])
       const handleEdit = (id1) => {
        const [employee] = employees.filter(employee => employee.id1 === id1);
        setSelectedEmployee(employee);
        setIsEditing(true);
    }
    
       const handleDelete = (id1) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id1 === id1);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(employees.filter(employee => employee.id1 !== id1));
            }
        });
    }
       function onclickhandler(){
        
        const newEmployee = {
          firstName,
          lastName,
          id1,
          gender,
          grade,
          odc,
          BU,
          project
      }
      employees.push(newEmployee);
      setEmployees([...employees]);
        console.log(employees);
        

       }
    return (
        <>
        <button type="button" className="btn btn-danger float-right mt-2" data-toggle="modal" data-target="#exampleModal">Add New Employee</button>





        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Employee</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                           

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">FIRST NAME</label>
                                <input type="text" ref={textInput} onChange={e=>{setFirstName(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">LAST NAME</label>
                                <input type="text" onChange={e=>{setLastName(e.target.value)}} className="form-control" id="exampleInputPassword1" placeholder="Last Name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">ID</label>
                                <input type="number" onChange={e=>{setId(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ID" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <select onChange={e=>{var select=document.getElementById("gender");
                                var option = select.options[select.selectedIndex];
                                setGender(option.value);}} id="gender" className="form-control">
                                    <option selected>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="grade">Grade</label>
                                <select onChange={e=>{var select=document.getElementById("grade");
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
                                <input type="text"onChange={e=>{setBU(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter BU" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Project</label>
                                <input type="text" onChange={e=>{setProject(e.target.value)}} className="form-control" id="exampleInputPassword1" placeholder="Enter Project" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" onClick={onclickhandler} className="btn btn-primary" data-dismiss="modal">Add</button>
                    </div>
                </div>
            </div>
        </div>
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
                    onClick={() => handleEdit(employee.id1)}
                    className="button muted-button"
                >
                    Edit
                </button>
            </td>
            <td className="text-left">
                <button
                    onClick={() => handleDelete(employee.id1)}
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

    {isEditing && (
    <Edit
        employees={employees}
        selectedEmployee={selectedEmployee}
        setEmployees={setEmployees}
        setIsEditing={setIsEditing}
    />
)}

      </>


    )



}
export default Employee;