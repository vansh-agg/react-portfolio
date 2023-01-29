import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si'

const Socials = () => {

    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/vansh-aggarwal-a4102b22b/"><AiFillLinkedin /></a>
            <a href="https://github.com/vansh-agg"><AiFillGithub /></a>
            <a href="https://leetcode.com/vanshcodes583/"><SiLeetcode /></a>
        </div>

    )
}

export default Socials