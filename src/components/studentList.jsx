import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Card, CardGroup, Button } from 'react-bootstrap';
import '../styles/studentList.css';


const StudentList = () => {
    let location = useLocation()
    let [student, setStudent] = useState([])
    useEffect(() => {
        let fecting = async () => {
            let response = await fetch('http://localhost:4000/student')
            let data = await response.json()
            setStudent(data)
        }
        fecting()
    }, [student])

    //delete a book from server
    let handleDelete = (id, name) => {
        fetch(`http://localhost:4000/student/${id}`,
            {
                method: 'DELETE'
            })
        alert(`${name} has been delete permanently`)
    }
    let navigate = useNavigate()
    let readmore = (id) => {
        if (location.pathname == '/admin/studentList') {
            navigate(`/admin/studentList/${id}`)
        }
        else {
            navigate(`/user/studentList/${id}`)
        }
    }
    return (
        <div className="studentList">
            <h1 id='title' align="center">STUDENT LIST : {student.length}</h1>
            {
                student.map(x => (
                    <div className="studentCard">
                        <h2><u><i>Name</i></u> : {x.name}</h2>
                        <h3>Course: {x.course}</h3>
                        <h3>Email : {x.email}</h3>
                        <h3>Phone Number : {x.phoneNumber}</h3>
                        {location.pathname == '/admin/studentList' && <button id='btn8' onClick={() => handleDelete(x.id, x.name)} style={{ color: 'white', backgroundColor: "red" }} >Remove</button>}
                    </div>

                ))
            }
        </div >
    );
}

export default StudentList;
