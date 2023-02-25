import { Routes, Route } from "react-router-dom";
import AddFaculty from "./addFaculty";
import AddStudent from "./addSudent";
import AdminNavbar from "./adminNavabr";
import Contact from "./contact";
import FacultyList from "./facultyList";
import Home from "./home";
import StudentList from "./studentList";

const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
        <AdminNavbar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/addFaculty" element={<AddFaculty/>}/>
            <Route path="/facultyList" element={<FacultyList/>}/>
            <Route path="/addStudent" element={<AddStudent/>}/>
            <Route path="/studentList" element={<StudentList/>}/>
            {/* <Route path="/add-user" element={<AddUser/>}/> */}
        </Routes> 
    </div>
     );
}
 
export default AdminPortal;