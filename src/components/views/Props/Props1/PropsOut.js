import React from 'react';
import media from '../../../media';
import PropsIn1 from './PropsIn';


export default function PropsOut1 () {
    return (
        <>
        <div className='d-flex'>
            <div className="card round-lg">
                <PropsIn1 size={150} url={media.logo} name="A" dept="IT Sr.HEAD"/>
            </div>
            <div className="card round-lg">
                <PropsIn1 size={150} url={media.logo} name="B" dept="IT Sr.HEAD"/>
            </div>
            <div className="card round-lg">
                <PropsIn1 size={150} url={media.logo} name="C" dept="IT Sr.HEAD"/>
            </div>
        </div>
        
        </>
    )
}