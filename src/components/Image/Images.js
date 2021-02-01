
import React, {useEffect, useState} from 'react';
import axios from "axios";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,CardFooter, Button
} from 'reactstrap';

const Images=()=>{
    const [photos,setPhotos] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res=>{console.log(res)
                setPhotos((res.data))})
            .catch(err=>{console.log(err)})
    },[])



    return(
        <div className="container-fluid">
        {photos.map((image,index)=>(
            <div className="row">
                <div className="col-md-4 d-inline-flex">
                    <Card key={image.id}  >
                        <CardImg top width="150px" height="150px" src={image.thumbnailUrl} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">{image.title}</CardTitle>
                            <CardFooter tag="h6">{image.id}</CardFooter>
                        </CardBody>
                    </Card>
                </div>
            </div>

            ))}
        </div>

    )
}
export default  Images;


// <div key={image.id}>
//     <Card>
//         <CardImg top width="100%" src={image.url} alt="Card image cap" />
//         <CardBody>
//             <CardTitle tag="h5">{image.title}</CardTitle>
//             <CardFooter tag="h6">{image.id}</CardFooter>
//         </CardBody>
//     </Card>
// </div>
