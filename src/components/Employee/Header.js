import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            
               
                <button onClick={() => setIsAdding(true)} type="button" className="btn btn-danger float-right mt-2" data-toggle="modal" data-target="#exampleModal">Add New Employee</button>

           
        </header>
    )
}

export default Header