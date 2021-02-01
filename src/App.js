
import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/pages/Posts';
import Contact from "./components/pages/Contact";
import NavBar from "./components/Layout/Navbar";
import NotFound from './components/pages/NotFound';
import AddUser from './components/Users/AddUser';
import User from "./components/Users/User";
import Posts from "./components/pages/Posts";
import Post from "./components/pages/Post";
import Images from "./components/Image/Images";
import Todos from "./components/Todos/Todos";
import Comments from "./components/Comments";
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar></NavBar>
      <switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/posts" component={Posts}></Route>

        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/user/add" component={AddUser}></Route>


        {/*<Route exact path="/user/:id" component={ViewUser}></Route>*/}
        <Route exact path="/user/:id" component={User}></Route>
        <Route exact path="/post/:id" component={Post}></Route>

        <Route exact path="/images" component={Images}></Route>
        <Route exact path="/todos" component={Todos}></Route>
        <Route exact path="/comments" component={Comments}></Route>


        <Route path="/404" component={NotFound}></Route>
      </switch>
   
    </div>
    </Router>
  );
}

export default App;
