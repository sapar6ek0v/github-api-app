import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import './user-rep.css'
import Repositories from "../../components/Repositories/Repositories";
import {Plane} from "react-loader-spinner";



const UserRepInfo = () => {
    const {name} = useParams()
    const {title} = useParams()
    const [userRepInfo, setUserRepInfo] = useState({})
    const [lang, setLang] = useState({})
    const [readme, setReadme] = useState({})
    const [readmeMd, setReadmeMd] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const p1 = axios(`https://api.github.com/repos/${name}/${title}`)
            .then(({data}) => {
                setUserRepInfo(data)
            })
            .catch((e) => console.log(e))

        const p2 = axios(`https://api.github.com/repos/${name}/${title}/readme`)
            .then(({data}) => {
                setReadme(data)
            })
        const p3 = axios(`https://api.github.com/repos/${name}/${title}/languages`)
            .then(({data}) => {
                setLang(data)
            })
        const p4 = axios(`https://raw.githubusercontent.com/${name}/${title}/master/README.md`)
            .then(({data}) => setReadmeMd(data))

        Promise.all([p1, p2, p3, p4])
            .then(() => setLoading(false))
    },[name, title])

    if (loading) {
        return <div className='loader'>
            <Plane
                secondaryColor='black'
                color='green'
                arialLabel="loading-indicator" />
        </div>
    }


    return (
        <div className='container'>
           <Repositories lang={lang} readmeMd={readmeMd} userRepInfo={userRepInfo} />
        </div>
    );
};

export default UserRepInfo;