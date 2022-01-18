import React from 'react';
import Search from "../Search/Search";
import './header.css'
import {Link, useNavigate} from "react-router-dom";
import {Dropdown, DropdownButton} from "react-bootstrap";

const Header = () => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate('/')
    }

    return (
        <header>
            <div className='container'>
                <div className='header'>
                    <button onClick={onClick} className='header-button'>home</button>
                    <DropdownButton variant="success"  id="dropdown-basic-button" title="Search">
                        <Dropdown.Item>
                            <Link to={`/search-user`}>
                                Search Users
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to={`/search-rep`}>
                                Search Repositories
                            </Link>
                        </Dropdown.Item>
                    </DropdownButton>
                    <Search/>
                </div>
            </div>
        </header>
    );
};

export default Header;