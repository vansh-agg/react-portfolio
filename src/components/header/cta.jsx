import React from 'react'
import './header.css'
import cv from '../../assets/vansh_cv_main.pdf'
const Cta = () => {
    return (
        <div className='cta'>
            <a href={cv} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
    )
}

export default Cta