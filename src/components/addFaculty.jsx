import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/addFaculty.css'


const AddFaculty = () => {
    let [name,setName] = useState("")
    let [designation,setDesignation] = useState("")
    let [qualification,setQualification] = useState("")
    let navigate = useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault()
        let data={name,designation,qualification}
        console.log(data);
        fetch('http://localhost:4000/faculty',
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert(`${name} added successfully`)
        navigate('/admin/facultyList')

    }
    return ( 
      <div className="facultyBody">

        <div className="addFaculty">
          <h1>Add Faculty Details</h1>
          <div className="bookForm">
            <form action="" onSubmit={handleSubmit}>
                <div className="name">
                <input type="text" placeholder="Enter the Faculty Name" required value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="designation">
                <input type="text" placeholder="Enter the Designation" required value={designation} onChange={(e)=>setDesignation(e.target.value)}/>
                </div>
                <div className="qualification">
                <input type="text" placeholder="Enter the Qualification" required value={qualification} onChange={(e)=>setQualification(e.target.value)}/>
                </div>
                <button id="btn3" type="submit">Submit</button>
            </form>
        </div>
        </div>
        </div>
             );

            }

// {/* <Form onSubmit={handleSubmit} className='w-50 bg-warning p-5 ms-5 mt-5'  >
//       <h1 style={{"color":"black"}}>Add Faculty Details</h1>
// <img src="/images/pic2.jpg" style={{"width":"800px", height:"250px",marginTop:"-20px" ,marginLeft:"150px"}} alt="" />
//       <Form.Group className="mb-3 " controlId="formBasicEmail">
//         <Form.Label className="text-dark ms-5">Faculty Name</Form.Label>
//         <Form.Control className=" ms-5 w-50" type="text" placeholder="Enter Faculty Name" required value={name} onChange={(e)=>setName(e.target.value)} />
       
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label className="text-dark ms-5">Qualification</Form.Label>
//         <Form.Control className="w-50 ms-5" type="text" placeholder="Enter the qualification" required value={qualification} onChange={(e)=>setQualification(e.target.value)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label className="text-dark ms-5">Desigantion</Form.Label>
//         <Form.Control className="w-50 ms-5" type="text" placeholder="Enter the Desigantion" required value={designation} onChange={(e)=>setDesignation(e.target.value)}/>
//       </Form.Group>
//       <Button variant="primary" className="w-5 ms-5" type="submit">
//         Submit
//       </Button>
//     </Form>
// </div> */}

 
export default AddFaculty;