import React from 'react';
import {Route,Link,Routes} from 'react-router-dom';
import Login from './MyComponent/Login'
import Signup from './MyComponent/Signup'
import Delete from './MyComponent/Delete'
import User_view from './MyComponent/User_view'
import Add_book from './MyComponent/Add_book'

function App() {
    return (
    

 
<div>
 <Routes>
                 <Route  path = "/" element = {<Login/>}/>
                 <Route  path = "/Signup" element = {<Signup/>}/>
                
<Route  path = "/Add_book" element = {<Add_book/>}/>

<Route  path = "/User_view" element = {<User_view/>}/>
<Route  path = "/Delete" element = {<Delete/>}/>
</Routes>
               

        </div>
    );
}
export default App