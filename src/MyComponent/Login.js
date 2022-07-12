import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Log(){
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

function handleDemo1(e)
{
  setName(e.target.value);
}

function handleDemo2(e)
{
  setPassword(e.target.value);
}
async function login()
{
  const data = {"name":name,"password":password};
  const config = {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type':'application/json',
    },
    body:JSON.stringify(data)
  }
  const response = await fetch('http://localhost:4200/log', config)
  const json = await response.json();

  console.log(json);
  if(json.length==0)
  {
    console.log("invalid user");
  }
  else if (json[0].name=="aa")
  {
   
    navigate("/User_view");
  }
  

}


function signin(){
navigate("/Signup");
}
    return(
      <>
       
 

<div class="box">
        <h1>Login</h1>
        <input type="text" placeholder="username"   onChange = {handleDemo1}/><br/>
        <input type="password" placeholder="password"  onChange = {handleDemo2}/><br/>
        <button   type="button" onClick={login} >Login</button>
        <button   type="button" onClick={signin} >Signin</button>
    </div>


      </>
    );
}
export default Log ;