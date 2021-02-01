import { React, useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const Posts =()=>{
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{console.log(res)
                setPosts((res.data))})
            .catch(err=>{console.log(err)})
    },[])



    return(
        <div className="container">
            <div className="py-4">
                <h1 className="text-center">List of Posts</h1>
                <table class="table border shadow">
                    <thead class="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category (userId)</th>
                        <th scope="col">Title</th>
                        <th className="text-center" scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map((post,index)=>(

                        <tr key={post.userId}>
                            <th scope="row">{index+1}</th>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td className="text-center">
                                <Link to="/view/user" className="btn btn-primary mr-2" to={`/post/${post.id}`}>View</Link>
                            </td>

                        </tr>
                    ))}


                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Posts;
