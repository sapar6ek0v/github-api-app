import React, {useState} from 'react';
import './search.css'
import {useNavigate} from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

const Search = () => {
    const navigate = useNavigate()
    const [searchUsers, setSearchUsers] = useState('')

    const onClick = () => {
        navigate(`/search/${searchUsers}`)
        setSearchUsers('')
    }

    const onKeyDown = (e) => {
        if (e.target.code === "Enter") {
            navigate(`/search/${searchUsers}`)
        }
    }

    const onChange = (e) => {
        if (searchUsers) {
            setSearchUsers('')
        }
        setSearchUsers(e.target.value.trim())
    }

    return (
        <div>
            <Input value={searchUsers} func={onChange} className={'search-input'} width={'200px'} />
            <Button onClick={onClick} className={'search-btn'} onKeyDown={onKeyDown}/>
        </div>
    );
};

export default Search;