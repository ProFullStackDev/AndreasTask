import React from 'react';
import './FirstLayout.css'
// import AgreeImage from './../../../public/images/undraw_agreement_aajr.svg'
const FirstLayout =()=>{
    return(
        <div >
            <img src={process.env.PUBLIC_URL + '/images/undraw_agreement_aajr.svg'} className="agreement-img"/>
        </div>
    )
}
export default FirstLayout;