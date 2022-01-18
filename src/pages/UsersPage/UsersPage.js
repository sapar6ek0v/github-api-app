import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import './UserPage.css'
import { Plane } from  'react-loader-spinner'

const UsersPage = () => {
    const {name} = useParams()
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios(`https://api.github.com/search/users?q=${name}`)
            .then(({data}) => {
                setUsers(data.items)
                setLoading(false)
            })
            .catch((e) => console.log(e))
    }, [name])

    if (loading) {
        return <div className='loader'>
            <Plane
                secondaryColor='black'
                color='green'
                arialLabel="loading-indicator" />
        </div>
    }

    return (
        <div className='user-page'>
            <div className='container'>
                <div className='row'>
                    {
                        users.map( user => {
                            return (
                                <div key={user.id}  className='col-3 mb-4'>
                                    <div className='user-page-card'>
                                        <Link className='text-decoration-none user-page-link' to={`/user-info/${user.login}`}>
                                            <img className='user-page-img' src={user.avatar_url} alt=""/>
                                            <div>{user.login}</div>
                                            <div>{user.type}</div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default UsersPage;