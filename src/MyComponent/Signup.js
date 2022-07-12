import {Button,Form} from 'react-bootstrap';
import React,{useState} from 'react';

import { useNavigate } from 'react-router-dom';
import Axios from "axios";
function Signup(){
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
const [phonenumber, setPhonenumber] = useState('');
function handleDemo1(e)
{
  setName(e.target.value);
}



function handleDemo2(e)
{
  setPassword(e.target.value);
}

function handleDemo3(e)
{
  setConfirmpassword(e.target.value);
}

function handleDemo4(e)
{
  setPhonenumber(e.target.value);
}


async function mysubmit()
{
  const data = {"name":name,"password":password,"confirmpassword":confirmpassword,"phonenumber":phonenumber};
  console.log(data);
  Axios.post("http://localhost:4200/signin",data).then(
    res=>console.log(res)
  );
  const data1 = {"name":name,"password":password,};
  console.log(data1);
  Axios.post("http://localhost:4200/login",data1).then(
    res=>console.log(res)
  );

  navigate("/User_view");


}



    return(
      <>
       <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter Your Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your UserName" onChange = {handleDemo1}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password"  onChange = {handleDemo2}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Confirm password</label>
    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="confirm Password"  onChange = {handleDemo3}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">phone number</label>
    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Enter Phonenumber"  onChange = {handleDemo4}/>
  </div>
  <br/>
  <Button type="button" onClick={mysubmit}>Submit</Button>
</form>
      </>
    );
}
export default Signup;