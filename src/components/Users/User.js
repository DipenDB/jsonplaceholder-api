
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardFooter
} from 'reactstrap';




const User=(props)=>{
    const [users,setUsers] = useState({
        id:"",
        name:"",
        email:"",
        website:"",
        city:"",
        street:"",
        phone:"",
        company:""
        }
    );

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`)
            .then(res=>{console.log(res)
                setUsers((res.data))})
            .catch(err=>{console.log(err)})
    },[])


    // const user = users.find(user=>user.id === parseInt(props.match.params.id))


        return(
            <div className="container" key={props.match.params.id}>

                    <Card className="">
                        <CardBody className="pl-4">
                            <CardFooter tag="h4" classname="text-bold">User Id :<span className="text-muted">{users.id}</span> </CardFooter>
                            <CardTitle tag="h5">Name :<span className="text-muted"> {users.name}</span></CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 ">Email : <span className="text-muted">{users.email}</span></CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 ">Email : <span className="text-muted">{users.email}</span></CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 ">Phone : <span className="text-muted">{users.phone}</span></CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 ">Street : <span className="text-muted">{users.address.street}</span></CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 ">City : <span className="text-muted">{users.address.city}</span></CardSubtitle>
                            <CardText>Website : <span className="text-muted">{users.website}</span></CardText>
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
export  default  User;
