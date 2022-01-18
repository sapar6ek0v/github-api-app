import React, {useState} from 'react';
import { Container} from "react-bootstrap";
import './searchUser.css'
import Input from "../Search/Input";
import {useNavigate} from "react-router-dom";
import Button from "../Search/Button";

const SearchUser = () => {
    const navigate = useNavigate()
    const [searchUsers, setSearchUsers] = useState('')

    const onClick = () => {
        navigate(`/search/${searchUsers}`)
        setSearchUsers('')
    }

    const onChange = (e) => {
        // if (searchUsers) {
        //     setSearchUsers('')
        // }
        setSearchUsers(e.target.value.trim())
    }

    const onKeyDown = (e) => {
        if (e.target.code === "Enter") {
            navigate(`/search/${searchUsers}`)
        }
    }
    return (

        <Container>
            <div className='search-user-page'>
                <h3 className='search-user-title'>Search Users</h3>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='block-center'>
                        <Input value={searchUsers} func={onChange} className={'search-user search-input'}/>
                        <Button className={'search-btn search-user-btn'} onClick={onClick} onKeyDown={onKeyDown} />
                    </div>
                </div>
            </div>
        </Container>

    );
};

export default SearchUser;