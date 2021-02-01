
import React from 'react';
import axios from "axios";

import groupBy from 'json-groupby';

class Comments extends React.Component{

    state ={
        comments:[]
    }

    async componentDidMount() {
        let result = await axios.get("https://jsonplaceholder.typicode.com/comments");

        await new Promise(x=>setTimeout(x,1000))


        this.setState({comments:result.data});

    }



    render(){
        // console.log('original data: ',this.state.comments);

        var after = groupBy(this.state.comments,['postId'])




        return(
            <div className="container p-2">
                <h2> Comments</h2>



                {/*{this.state.after.groupby > 0 ? (*/}
                {/*        <div>*/}
                {/*            <ul className="list-group">*/}

                {/*                {this.state.comments.map(comment=>(*/}

                {/*                    <li key={comment.postId} className="list-group-item d-flex justify-content-between align-items-center m-2">*/}
                {/*                        {comment.postId}*/}
                {/*                        <button type="button" className="btn btn-primary">View</button>*/}
                {/*                    </li>*/}
                {/*                ))}*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*    ):*/}
                {/*    <div className="spinner-border text-primary " role="status">*/}
                {/*        <span className="sr-only">Loading...</span>*/}
                {/*    </div>*/}
                {/*}*/}



            </div>

        )
    }
}
export default Comments;
