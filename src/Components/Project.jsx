import React from 'react'
import './Project.css'
import { useState,useEffect } from 'react'
const Project = () => {
    const [name,setname]=useState();
    const [rollno,setrollno]=useState();
    const [department,setdepartment]=useState();
    const [email,setemail]=useState();
    const [phoneno,setphoneno]=useState();
    const [Student,setStudent]=useState([{
        id:1,
        Name:"Riya",
        Rollno:121,
        Department:"IT",
        EmailAddress:"Riya@gmail.com",
        Phonenumber:9015802530,
        },
        {
        id:2,
        Name:"Ziya",
        Rollno:122,
        Department:"IT",
        EmailAddress:"Ziya@gmail.com",
        Phonenumber:7824367260,
        },
        {
        id:3,
        Name:"Prisha",
        Rollno:123,
        Department:"IT",
        EmailAddress:"Prizz@gmail.com",
        Phonenumber:9245862010
        }
    ]);
    const addstudent=()=>{
        if(!name.trim()||!rollno.trim()||!department.trim()||!email.trim()||!phoneno.trim())
        {
            alert("please fill all the details");
            return;
        }
        const newstudent={
            id:Date.now(),
            Name:name,
            Rollno:rollno,
            Department:department,
            EmailAddress:email,
            Phonenumber:phoneno
        };
        setStudent([...Student,newstudent]);
        setname("");
        setrollno("");
        setdepartment("");
        setemail("");
        setphoneno("");
    };
    const deletestudent=(id)=>{
        const update=Student.filter((i)=>i.id!==id);
        setStudent(update);
    }

    function displayname(e){
        setname(e.target.value)
    }
    function displayrollno(e){
        setrollno(e.target.value)
    }
    function displaydept(e){
        setdepartment(e.target.value)
    }
    function displaymail(e){
        setemail(e.target.value)
    }
    function displayphoneno(e){
        setphoneno(e.target.value)
    }

  return (
    <>
    <div className='student-container'>
        
            <h1 style={{textAlign:"center",fontSize:"70px"}}>Student Management System</h1><br/>
            <div className='student-total'>
            <h2 style={{fontSize:"50px"}} >Total Students : {Student.length}</h2><br/><br/>
            <div className='field'>
            <label class='name'>Name :</label><br/>
            <input style={{fontSize:"20px",fontStyle:"oblique"}} type='text' placeholder='Enter your name' value={name} onChange={displayname} /><br/><br/>
            <label class='name'>Rollno :</label><br/>
            <input style={{fontSize:"20px",fontStyle:"oblique"}} type='number' placeholder='Enter your rollno' value={rollno} onChange={displayrollno} /><br/><br/>
            <label class='name'>Department :</label><br/>
            <input style={{fontSize:"20px",fontStyle:"oblique"}} type='text' placeholder='Enter your department' value={department} onChange={displaydept} /><br/><br/>
            <label class='name'>EmailId :</label><br/>
            <input style={{fontSize:"20px",fontStyle:"oblique"}} type='text' placeholder='Enter your emailid ' value={email} onChange={displaymail} /><br/><br/>
            <label class='name'>Phonenumber :</label><br/>
            <input style={{fontSize:"20px",fontStyle:"oblique"}} type='number' placeholder='Enter your phonenumber' value={phoneno} onChange={displayphoneno} /><br/>
            <div className='design'>
            <button onClick={addstudent}>Add Student</button>
            </div>
            </div><br/>
            <h1 style={{marginLeft:"20px",textAlign:"left"}}>Student Details</h1>
            </div>

        {
        Student.map((i)=>(
            <div className='student-card'>
                <div key={i.id}>
                <p> Name : {i.Name}</p>
                <p>Rollno : {i.Rollno}</p>
                <p>Department : {i.Department}</p>
                <p>EmailId : {i.EmailAddress}</p>
                <p>Phoneno : {i.Phonenumber}</p>
                </div>
                <button onClick={()=>{deletestudent(i.id)}}>Delete</button>
                <hr/>
            </div>
        ))
        }
    </div>
    </>
  )
}

export default Project