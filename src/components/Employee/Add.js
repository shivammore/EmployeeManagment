import React, { useState, useRef, useEffect } from 'react'


function Add({ employees, setEmployees, setIsAdding }) {
   

        const[firstName,setFirstName]=useState("");
        const[lastName,setLastName]=useState("");
        const[id1,setId]=useState("");
        const[gender,setGender]=useState("");
        const[grade,setGrade]=useState("");
        const[odc,setOdc]=useState("");
        const[BU,setBU]=useState("");
        const[project,setProject]=useState("");
       
        const textInput = useRef(null);
 
        useEffect(() => {
            textInput.current.focus();
        }, [])
        const handleAdd = e => {
            e.preventDefault();
         
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
       setIsAdding(false);
         
         
 
        }
     return (
         <>
 
 
 
 
 
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
                         <form onSubmit={handleAdd}>
                            
 
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
                         <button type="button" onClick={() => setIsAdding(false)} className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                         <button type="button"  className="btn btn-primary">Add</button>
                     </div>
                 </div>
             </div>
         </div>
         </>

    )



}
export default Add;