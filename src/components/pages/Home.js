import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{console.log(res)
              setUsers((res.data))})
        .catch(err=>{console.log(err)})
  },[])

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center">List of Users</h1>
        <table class="table border shadow">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th className="text-center" scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
              {users.map((user,index)=>(
                  <tr key={user.id}>
                      <th scope="row">{index+1}</th>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td className="text-center">
                        <Link to="/view/user" className="btn btn-primary mr-2" to={`/user/${user.id}`}>View</Link>
                        <Link className="btn btn-success mr-2">Edit</Link>
                        <Link className="btn btn-danger">Delete</Link>
                      </td>
                  </tr>
              ))}
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
