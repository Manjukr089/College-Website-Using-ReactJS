import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Card, CardGroup, Button } from 'react-bootstrap';
import '../styles/facultyList.css'

const Facultylist = () => {
    let location = useLocation()
    let [faculty, setFaculty] = useState([])
    useEffect(() => {
        let fecting = async () => {
            let response = await fetch('http://localhost:4000/faculty')
            let data = await response.json()
            setFaculty(data)
        }
        fecting()
    }, [faculty])

    //delete a book from server
    let handleDelete = (id, name) => {
        fetch(`http://localhost:4000/faculty/${id}`,
            {
                method: 'DELETE'
            });
        alert(`${name} has been delete permanently`)
    }
    // let navigate = useNavigate()

return (
    <div className="facultyList">
        <h1 id="title">FACULTY LIST : {faculty.length}</h1>
        {
            faculty.map(x => (

                <div className="facultyCard">

                    {/* <div className="discrip" align="left"> */}
                    <h2><u><i>Name</i></u> : {x.name}</h2>
                    <h3>Qualification: {x.qualification.toString()}</h3>
                    <h3>Designation : {x.designation}</h3>
                    {location.pathname == '/admin/facultyList' && <button id="btn7" onClick={() => handleDelete(x.id, x.name)} style={{ color: 'white', backgroundColor: "red" }}>Remove</button>}
                </div>

            ))
        }
    </div>
  );
}

export default Facultylist;
