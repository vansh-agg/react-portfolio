import React, { useEffect } from 'react'
import './header.css'
import Cta from './cta'
import Socials from './socials.jsx'
import pic from '../../assets/mypic.jpg'
import aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
    useEffect(() => {
        aos.init({ duration: 1000 });
    }, [])
    return (
        <header data-aos="zoom-in">
            <div className='container header_container'>
                <main className="header_style">
                    <p className='txt'>Hello, I'm</p>
                    <div className="animation">
                        <div className="first"><div>Vansh Aggarwal</div></div>
                        <div className="second"><div>Web Developer</div></div>
                        <div className="third"><div>Coding enthusiast</div></div>
                    </div>
                    <div className='name'>Vansh Aggarwal</div>
                    <div className='name'>(<span className='web'>Web</span> <span className='dev'>Developer</span> )</div>

                </main>
                <Cta />
                <Socials />
                <div className='me'>
                    <img src={pic} alt="..."></img>
                </div>
                <div className='scroll_down'>
                    <a href="#contact">Scroll down</a>
                </div>
            </div>

        </header>
    )
}

export default Header