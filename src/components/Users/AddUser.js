import { React } from 'react';
import { useState } from 'react';


const AddUser =()=>{
    
    const [user, setUser] = useState({
        name : "",
        username : "",
        email : "",
        phone: "",
        website: ""
    })



    return(
        <div className="container">
            <form>
                <h1 className="mb-4 py-3">Add User</h1>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter your name..." name="name" value="{name}" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter your User Name..." name="username" value="{username}" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter your email..." name="email" value="{email}" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter your phone number..." name="phone" value="{phone}" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter your website..." name="website" value="{website}" aria-describedby="emailHelp"/>
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
    )
}

export default AddUser;