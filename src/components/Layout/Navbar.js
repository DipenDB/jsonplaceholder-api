
import { React } from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

const NavBar =()=>{
    return(

        <div>
        <Navbar color="primary" dark expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler  />
            <Collapse navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <Link className="nav-link" exact to="/">Users</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" exact to="/posts">Posts</Link>
                </NavItem>

                <NavItem>
                    <Link className="nav-link" exact to="/images">Gallery</Link>
                </NavItem>

                <NavItem>
                    <Link className="nav-link" exact to="/todos">Todos</Link>
                </NavItem>

                <NavItem>
                    <Link className="nav-link" exact to="/comments">Comments</Link>
                </NavItem>

                <NavItem>
                    <Link className="nav-link" exact  to="/contact">Contact</Link>
                </NavItem>
                
            </Nav>
            </Collapse>
            <Link to="/user/add" className="btn btn-light">Add User</Link>
            </Navbar>
        </div>
    )
}

export default NavBar;
