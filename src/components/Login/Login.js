import './Login.css'
import React,{useState} from 'react';
function Login(props) {
    const [name,setName]=useState('');
    var isnamevalid=false
    var ispasswordvalid=false
    
    const [password,setPassword]=useState('');
    const [message,setmessage]=useState('')
    const isValid=(e)=>{
        e.preventDefault();
         
            if("admin@persistent.com"===name){

                isnamevalid= true;
                
            }
            if("BookingAdmin"===password){
                ispasswordvalid=true
                
            }
            
       
            if(name.length<=0 && password.length<=0){
                setmessage('Empty username or password')
            }
        else if(!isnamevalid){
            setmessage('Incorrect Email address')
           
        }else if(!ispasswordvalid){
            
            setmessage('Incorrect password')
        }else{
           props.onlog(true);
            
        }
        

    }
    return (
        <>
            <center>
                <form onSubmit={isValid} style={{ width: 300, textAlign: 'center',marginTop:150 }}>
                    <div className="form-group" >
                        <label >Login</label>
                        
                        <input type="email"  onChange={e => setName(e.target.value)} id="username" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" />

                    </div>
                    <div className="form-group">

                        <input type="password" onChange={e => setPassword(e.target.value)} id="password" className="form-control"  placeholder="Password" />
                    </div>
                    <div id='errorMessage'>{message}</div>
                    <button type="submit" className="btn btn-danger btn-lg btn-block">Login</button>
                </form></center>
        </>
    )



}
export default Login;