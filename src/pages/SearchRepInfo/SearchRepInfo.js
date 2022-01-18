import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {Container, Row} from "react-bootstrap";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import './search-rep.css'
import {Plane} from "react-loader-spinner";
import UseRep from "../../components/UserRep/UseRep";

const SearchRepInfo = () => {
    const {repos} = useParams()
    const [rep, setRep] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        axios(`https://api.github.com/search/repositories?q=${repos}`)
            .then(({data}) => {
                setRep(data.items)
                setLoading(false)
            })
    }, [repos])

    if (loading) {
        return <div className='loader'>
            <Plane
                secondaryColor='black'
                color='green'
                arialLabel="loading-indicator" />
        </div>
    }

    return (
        <div className='rep-page'>
            <Container>
                <TransitionGroup className="row">
                    {rep.map(it => (
                        <CSSTransition
                            key={it.id}
                            timeout={500}
                            classNames="item"
                        >
                           <UseRep it={it} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </Container>
        </div>
    );
};

export default SearchRepInfo;