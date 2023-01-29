import React, { useState } from 'react'
import './navbar.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from 'react-icons/ai'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { MdOutlineContactMail } from 'react-icons/md'

const Navbar = () => {

    const [activenav, setactivenav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setactivenav('#')} className={activenav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setactivenav('#about')} className={activenav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#skills" onClick={() => setactivenav('#skills')} className={activenav === '#skills' ? 'active' : ''}><RiLightbulbFlashLine /></a>
            <a href="#projects" onClick={() => setactivenav('#projects')} className={activenav === '#projects' ? 'active' : ''}><AiOutlineBook /></a>
            <a href="#contact" onClick={() => setactivenav('#contact')} className={activenav === '#contact' ? 'active' : ''}><MdOutlineContactMail /></a>
        </nav>
    )
}

export default Navbar