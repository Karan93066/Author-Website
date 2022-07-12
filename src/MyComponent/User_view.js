import axios from "axios";
import {Table} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';


  function User(){
  
   
    const [list,setList]= useState([]);

      useEffect(()=>{
          axios.get("http://localhost:4200/detail").then(res=>setList(res.data));
      },[]);


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




      <h1 align ="center"> Books and Author Name</h1>
      <hr/>

<Table striped bordered hover>
        <thead>
          <th>Book Name</th>
          <th>Price</th>
          <th>Author Name</th>
        </thead>
        <tbody>
          {list.map((item,index)=>{
            return(
              <tr key={index}>
                <td>{item.bname}</td>
                <td>{item.price}</td>
                <td>{item.aname}</td>
              </tr>
            )
          })}
        </tbody>
      

        </Table>
      
     
      </>
    );
        }
export default User;