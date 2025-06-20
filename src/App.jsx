import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[username,setusername]=useState("");
      const[email,setemail]=useState("");
      const[password,setpass]=useState("");
      const[phone,setpno]=useState("");
  
  
      const handlesubmit=e=>{
          e.preventDefault();
          let userdata = {username,email,password,phone};
          console.log(username);
           console.log(email);
            console.log(password);
             console.log(phone);

          let result = JSON.stringify(userdata)
          localStorage.setItem("user",result)
      }


  return (
    
    <div>

        <form onSubmit={handlesubmit}>
        <h1>FBC FORM</h1>
     <label> enter username</label><br/>
        <input type="text"  
        name ='username'
        value={username}
        onChange={(e)=>setusername(e.target.value)}

        /><br/>
        <label> Enter email</label><br/>
        <input type="text" 
         name ='email'
         value={email}
         onChange={(e)=>setemail(e.target.value)}
          /><br/>
        <label> enter password</label><br/>
        <input type="text" 
         name ='password'
         value={password}
         onChange={(e)=>setpass(e.target.value)}
          /><br/>
        <label> enter PhoneNumber</label><br/>
        <input type="text"
         name ='phone'
         value={phone}
         onChange={(e)=>setpno(e.target.value)}
         />
         <br/>
         <input type="submit"  />
           
        </form>
    </div>
    
       
  )
}

export default App;
