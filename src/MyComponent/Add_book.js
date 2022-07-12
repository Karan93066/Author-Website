import React, {useState} from 'react';
import Axios from "axios";
import {Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Add_book(){
  const navigate = useNavigate();
const [bname,setbName] = useState('');
const [publish,setpublish] = useState('');
const [price,setprice] = useState('');
const [aname,setaname] = useState('');
const [age,setage] = useState('');
const [dob,setdob] = useState('');

function handleDemo1(e){
  setbName(e.target.value);
}
function handleDemo2(e){
    setpublish(e.target.value);
  }
function handleDemo3(e){
  setprice(e.target.value);
}
function handleDemo4(e){
    setaname(e.target.value);
  }
function handleDemo5(e){
    setage(e.target.value);
  }
function handleDemo6(e){
    setdob(e.target.value);
  }
function savedetail(e){
  var data ={"bname":bname,"publish":publish,"price":price,"aname":aname,"age":age,"dob":dob};
  console.log(data);
  Axios.post("http://localhost:4200/savedetail",data).then(
    res=>console.log(res)
    );

    navigate("/User_view");
};


    return(
      <>



      
<ul class="nav nav-tabs">


<li class="nav-item">
<a class="nav-link" href="User_view">Home</a>
</li>

<li class="nav-item">
<a class="nav-link" href="Add_book">Add_book</a>
</li>

<li class="nav-item">
<a class="nav-link" href="Delete">Delete</a>
</li>
</ul>



      <h1>Add Product in your Table</h1>

      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Book Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter product name" onChange={handleDemo1}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Publish Date</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Publish Date" onChange={handleDemo2}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Price</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Book price" onChange={handleDemo3}/>
  </div>
  <br/>
  <div class="form-group">
    <label for="exampleInputPassword1">Author Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Author Name" onChange={handleDemo4}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Age</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Author Age" onChange={handleDemo5}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Author Date of Birth</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Author Date of Birth" onChange={handleDemo6}/>
  </div>
  <Button type="button" onClick={savedetail}>Submit</Button>
</form>
      </>
    );
}
export default Add_book;