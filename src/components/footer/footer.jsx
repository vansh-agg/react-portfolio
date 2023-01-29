import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si'
import './footer.css'
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>VANSH AGGARWAL</a>
            <hr></hr>
            <ul className='footer_links'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>
            <div className='footer_socials'>
                <a href="https://www.linkedin.com/in/vansh-aggarwal-a4102b22b/"><AiFillLinkedin /></a>
                <a href="https://github.com/vansh-agg"><AiFillGithub /></a>
                <a href="https://leetcode.com/vanshcodes583/"><SiLeetcode /></a>
                <a href="https://www.instagram.com/vansh.aggarwal999/"><AiOutlineInstagram /></a>
            </div>
            <div className='footer_copywrite'>
                <small>&copy; Vansh Aggarwal</small>
            </div>
        </footer>
    )
}

export default Footer