import React, {useState} from 'react';
import Input from "../Search/Input";
import Button from "../Search/Button";
import {Container} from "react-bootstrap";
import '../SearchUser/searchUser.css'
import {useNavigate} from "react-router-dom";

const SearchRep = () => {
    const navigate = useNavigate()
    const [searchUsers, setSearchUsers] = useState('')

    const onClick = () => {
        navigate(`/search-rep-info/${searchUsers}`)
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
            navigate(`/search-rep-info/${searchUsers}`)
        }
    }

    return (
        <Container>
            <div className='search-user-page'>
                <h3 className='search-user-title'>Search Repositories</h3>
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

export default SearchRep;