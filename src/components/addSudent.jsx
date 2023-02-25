import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddStudent = () => {
    let [name,setName] = useState("")
    let [course,setCourse] = useState("")
    let [email,setEmail] = useState("")
    let [phoneNumber,setphoneNumber] = useState("")
    let navigate = useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()
        let data={name,course,email,phoneNumber}
        fetch('http://localhost:4000/student',
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        // console.log(data);
        alert(`${name} added succefully`)
        navigate('/admin/studentList')

    }
    return ( 
        <div className="addStudent" align="center" >
<Form onSubmit={handleSubmit} className='w-50 bg-warning p-5 ms-5 mt-5 '  >
    <h1 style={{"color":"black"}}>Add Students Details</h1>
      <Form.Group className="mb-3 " controlId="formBasicText">
        <Form.Label className="text-dark ms-5" >Student Name</Form.Label>
        <Form.Control className=" ms-5 w-50" type="text"  placeholder="Enter Student Name" required value={name} onChange={(e)=>setName(e.target.value)} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className="text-dark ms-5">Course</Form.Label>
        <Form.Control className="w-50 ms-5" type="text" placeholder="Enter the Course" required value={course} onChange={(e)=>setCourse(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-dark ms-5">Email</Form.Label>
        <Form.Control className="w-50 ms-5" type="email" placeholder="Enter the Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label className="text-dark ms-5">Phone Numner</Form.Label>
        <Form.Control className="w-50 ms-5" type="number" placeholder="Enter the Phone Number" required value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" className="w-5 ms-5" type="submit">
        Submit
      </Button>
    </Form>
        </div>
     );
}
 
export default AddStudent;