

import React from 'react';
import axios from "axios";


class Todos extends React.Component{

    state ={
        todos:[]
    }

    async componentDidMount() {
        let result = await axios.get("https://jsonplaceholder.typicode.com/todos");

        await new Promise(x=>setTimeout(x,1000))

        this.setState({todos:result.data});

    }


    render() {
        return(

            <div className="container p-2">
                {this.state.todos.length > 0 ? (
                    <div>
                        <ul className="list-group">
                            {this.state.todos.map(todo=>(
                                <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center m-2">
                                    {todo.title}
                                    <input type="checkbox" checked={todo.completed}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                ):
                    <div className="spinner-border text-primary " role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }



            </div>


            )
    }

}
export default Todos;
