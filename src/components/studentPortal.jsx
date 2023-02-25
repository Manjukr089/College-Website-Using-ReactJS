import { Routes, Route } from "react-router-dom";
import Contact from "./contact";
import Facultylist from "./facultyList";
import Home from "./home";
import StudentList from "./studentList";
import StudentNavbar from "./studentNavbar";
const StudentPoratal = () => {
    return (
        <div className="studentportal">
            <StudentNavbar/>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/facultyList" element={<Facultylist />} />
                <Route path="/studentList" element={<StudentList />} />
                {/* <Route path="/add-user" element={<AddUser/>}/> */}
            </Routes>
        </div>
    );
}

export default StudentPoratal;