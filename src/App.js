
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Swal from 'sweetalert2';
import Login from "./components/Login/Login";
import Employee from './components/Employee/Employee';
import Dashboard from './components/Employee';
import { useState } from 'react';
function App() {
  var [logged,setLogged]=useState(true);
  function onloghandler(i){
     setLogged(false);
     }
      function onloghandler1(i){
       setLogged(true);
       }
    
  return (
    <>
    <div className="App">
      <Navbar menus={[{ name: 'Employee', url: 'https://google.com' }]} />
    </div>
    {!logged && <div className="Employee">
        <Employee  />
      </div>}
    {logged && <div className="Login">
        <Login logged={logged} onlog={onloghandler}/>
      </div>}
      </>
  );
}

export default App;