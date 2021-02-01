
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardFooter
} from 'reactstrap';




const Post=(props)=>{
    const [posts,setPosts] = useState({
            userId:"",
            id:"",
            title:"",
            body:""
        }
    );

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
            .then(res=>{console.log(res)
                setPosts((res.data))})
            .catch(err=>{console.log(err)})
    },[])


    // const user = users.find(user=>user.id === parseInt(props.match.params.id))


    return(
        <div className="container" key={props.match.params.id}>

            <Card className="">
                <CardBody>
                    <CardFooter tag="h4" classname="text-bold">Post Id : {posts.id}</CardFooter>
                    <CardTitle tag="h5">User Id :<span className="text-muted"> {posts.userId}</span></CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 ">Title :<span className="text-muted"> {posts.title}</span></CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 ">Description :<span className="text-muted"> {posts.body} </span> </CardSubtitle>
                </CardBody>
            </Card>









            {/*<h1>Name : {users.name}</h1>*/}
            {/*<h1>Email : {users.email}</h1>*/}
            {/*<h1>Phone : {users.phone}</h1>*/}
            {/*<h1>Street : {users.street}</h1>*/}
            {/*<h1>City : {users.city}</h1>*/}
            {/*<h1>Website : {users.website}</h1>*/}

        </div>
    )



}
export  default  Post;
