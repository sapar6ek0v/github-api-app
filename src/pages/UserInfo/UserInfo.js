import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import './user-info.css'
import {Plane} from "react-loader-spinner";

const UserInfo = () => {
    const {name} = useParams()
    const [user, setUser] = useState({})
    const [userRep, setUserRep] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const p1 = axios(`https://api.github.com/users/${name}`)
            .then(({data}) => {
                setUser(data)
            })
            .catch((e) => console.log(e))

        const p2 = axios(`https://api.github.com/users/${name}/repos`)
            .then(({data}) => {
                setUserRep(data)
            })
            .catch((e) => console.log(e))

        Promise.all([p1,p2])
            .then(() => setLoading(false))
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
        <div className='user-info-page'>
            <div className='container user-info-card'>
                <div className='row '>
                    <div className='col-4'>
                        <div className='mx-3'>
                            <img className='user-info-photo' src={user.avatar_url} alt={user.login}/>
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className='user-info-card'>
                            <div className='user-info-title'><span
                                className='fw-bold text-uppercase'>Login</span> : {user.login}</div>
                            <div className='user-info-title'><span
                                className='fw-bold text-uppercase'>Name</span> : {user.name || user.login}</div>
                            <div className='user-info-title'><span
                                className='fw-bold text-uppercase'> Company</span> : {user.company || 'not found'}</div>
                            <div className='user-info-title'><span
                                className='fw-bold text-uppercase'>Location</span> : {user.location || 'not found'}
                            </div>
                            <div className='user-info-title'><span
                                className='fw-bold text-uppercase'> Created</span> : {user.created_at?.slice(0, 10)}
                            </div>
                        </div>

                    </div>
                </div>
                <div className='user-rep-card'>
                    <h4 className='user-rep'>Repositories :</h4>
                    <div className='row'>
                        {
                            userRep.map(it => {
                                return (
                                    <Link key={it.id} to={`/user-repositories/${name}/${it.name}`} className='text-decoration-none'>
                                        <div className='p-3 user-info-rep'>
                                            {it.full_name}
                                        </div>
                                        {/*<span>*/}
                                        {/*    {it.visibility}*/}
                                        {/*</span>*/}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;