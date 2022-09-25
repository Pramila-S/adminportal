import logo from './logo.svg';
import './css/admin.css';
import './App.css';
import Dashboard from './Dashboard';
import Users from './Users';
import {  BrowserRouter, Routes,  Route,} from "react-router-dom";
import Createuser from './Createuser';
import Portal from './Portal';
import Login from './Login';
import Userview from './Userview';

import EditUser from './EditUser';


function App() {
  return (
    <BrowserRouter>    
              <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/portal" element={<Portal />}>
              <Route path="dashboard" element={<Dashboard />}/>
              <Route path="users" element={<Users />}/>
              <Route path="users/:id" element={<Userview />}/>
              <Route path="user/edit/:id" element={<EditUser />}/>
              <Route path="create-user" element={<Createuser />}/>
              </Route>
              </Routes>           
         
    </BrowserRouter>
    
  );
}

export default App;
