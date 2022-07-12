const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

// Create connection 
const conn = mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'bbk'


});
// connect connection 
conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connect..');
});
// save signin details
app.post('/signin',(req,res) => {
    let data = {name:req.body.name, phonenumber:req.body.phonenumber, password:req.body.password, confirmpassword:req.body.confirmpassword}
    console.log(data);
    let sql = "insert into register set ?";
    let query = conn.query(sql,data,(err,results) => {
        if(err) throw err;
       
    });
});

// save use detail in login table
app.post('/login',(req,res) => {
    let data1 = {name:req.body.name, password:req.body.password}
    console.log(data1);
    let sql = "insert into login set ?";
    let query = conn.query(sql,data1,(err,results) => {
        if(err) throw err;

    });
    });


//for login
app.post('/log',(req,res) => {
    let sql = "select * from login where name = '"+req.body.name+"' and password ='"+req.body.password+"'";
    console.log(sql);
    let query = conn.query(sql,(err,results) => {
        if(err) throw err;
        res.json(results);
    });
});







// save details
app.post('/savedetail',(req,res) => {
    let data = {bname:req.body.bname,publish:req.body.publish, price:req.body.price, aname:req.body.aname, age:req.body.age, dob:req.body.dob};
    console.log(data);
    let sql = "insert into details set ?";
    let query = conn.query(sql,data,(err,results) => {
        if(err) throw err;
       
    });
});



//view data
app.get('/detail',(req,res) => {
    
    let sql = "select * from details";
    let query = conn.query(sql,(err,results) => {
        if(err) throw err;
        res.json(results);
    });
});



app.get('/deletedata/:id',(req,res) => {
    const id = req.params.id;
    console.log(id);
    let sql = "delete from details where  id ="+id;
    let query = conn.query(sql,(err,results) => {
        if(err) throw err;
        
    });
});


app.listen(4200,()=>{
    console.log('express server running on 4200');
});
