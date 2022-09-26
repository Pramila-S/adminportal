import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { env } from './Config'

function Users() {
const [users, setUsers] = useState([]);
const [isLoading, setLoading] = useState(false)

useEffect(() => {
    loadData()
}, [])

let loadData = async () =>{
    setLoading(true)
let users = await axios.get(`${env.api}/users`);
console.log(users);
    setUsers(users.data)
    setLoading(false)
}; 
 let userDelete = async(id) => {
    try {
        let ask = window.confirm("Are you sure? Do you want to delete this data?");
        if (ask) {
        await axios.delete(`${env.api}/users/${id}`);
        loadData();
    }
    } catch (error) {
        
    }
 }

  return (
    <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Users</h1>
                        <Link to="/portal/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
                    </div>                   
                         {
                            isLoading ? <span>Loading...</span> : <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                            </div>
                            <div className="card-body">
                                <div clasNames="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>#Sl</th>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>#Sl</th>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                                <th>Action</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                   {
                                    users.map ((user,index) => {
                                        return<tr>
                                            <td>{index + 1}</td>
                                            <td>{user.username}</td>
                                            <td>{user.position}</td>
                                            <td>{user.office}</td>
                                            <td>{user.age}</td>
                                            <td>{user.startdate}</td>
                                            <td>${user.salary}</td>
                                            <td>
                                                <Link to={`/portal/users/${user._id}`} className='btn btn-sm btn-warning'>View</Link>
                                                <Link to={`/portal/user/edit/${user._id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                                <button onClick={() => userDelete(user._id)} className='btn btn-sm btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    })
                                   }
    
    
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                         }              
                    

                </div>
  );
}

export default Users;