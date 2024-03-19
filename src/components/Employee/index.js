import React,{useState} from "react";
import employeesData from '../../data/index.json'
import Swal from 'sweetalert2';
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";
import Header from "./Header";
function Dashboard() {

    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

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


    return (
        <div className='container'>
        <Header
                        setIsAdding={setIsAdding}
                    />
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default Dashboard;