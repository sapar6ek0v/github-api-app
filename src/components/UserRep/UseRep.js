import React from 'react';
import {Link} from "react-router-dom";

const UseRep = ({it}) => {
    return (
        <div key={it.id} className='col-3'>
            <Link className='text-decoration-none'
                  to={`/user-repositories/${it.owner.login}/${it.name}`}>
                <div className='rep-card'>
                    <div className='rep-photo-card'>
                        <img className='rep-card-img' src={it.owner.avatar_url} alt=""/>
                    </div>
                    <div>
                        <div className='rep-card-title'>{it.name}</div>
                        <div className='rep-card-sub-title'>{it.full_name}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default UseRep;