import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AdminPortal from './components/adminPortal';
import LandingPage from './components/landingpage';
import AdminLogin from './components/adminLogin';
import UserLogin from './components/userLogin';
import StudentPoratal from './components/studentPortal';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin/*' element={<AdminPortal/>}/>
        <Route path='/user/*' element={<StudentPoratal/>}/>
          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/user-login' element={<UserLogin/>}/>
          {/* <Route path='/user/*' element={<UserPortal/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
