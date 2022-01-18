import React from 'react';
import ReactMarkdown from "react-markdown";
import notFound from "../../img/not-found.png";
import '../../pages/UserRepInfo/user-rep.css'

const Repositories = ({userRepInfo, readmeMd, lang }) => {
    return (
        <div  className='user-rep-page'>
            <div className='d-flex justify-content-between'>
                <div className=' user-rep-title'>{userRepInfo.full_name}</div>
                <span className='user-rep-visibility'> {userRepInfo.visibility}</span>
            </div>
            <div className='row'>
                <div className='col-8'>
                    <div className='user-readme'>
                        {
                            readmeMd ? <ReactMarkdown >
                                    {readmeMd}
                                </ReactMarkdown>
                                : <img src={notFound} alt=""/>
                        }
                    </div>
                </div>
                <div className='col-4'>
                    <div className='info-card'>
                        <div className='rep-description'>{userRepInfo.description || '-'}</div>
                        <div>
                            {
                                Object.keys(lang).map(it => {
                                    return <div className='lang-card'>{it}:{(+lang[it])}</div>
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Repositories;