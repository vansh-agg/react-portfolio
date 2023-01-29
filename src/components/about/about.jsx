
import React, { useEffect } from 'react'
import './about.css';
import aos from 'aos'
import 'aos/dist/aos.css'
import mypic2 from "../../assets/mypic3.jpg"
import { MdOutlineCastForEducation } from 'react-icons/md'
import { FaUniversity } from 'react-icons/fa'
import { SiVisualstudiocode } from 'react-icons/si'

const About = () => {
    useEffect(() => {
        aos.init({ duration: 1000 });
    }, [])
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About me</h2>
            <div className='container about_container'>
                <div className='about_me' data-aos="zoom-in-left">
                    <img src={mypic2} alt="mypic"></img>
                </div>
                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card' data-aos="zoom-in-right">
                            <MdOutlineCastForEducation className='about_icon' />
                            <h4>Education</h4>
                            <small>B-Tech in Computer Science(Data Science)</small>
                        </article>

                        <article className='about_card' data-aos="zoom-in">
                            <FaUniversity className='about_icon' />
                            <h4>Institute</h4>
                            <small>Netaji Subhash University Of Technology</small>
                        </article>

                        <article className='about_card' data-aos="zoom-in-left">
                            <SiVisualstudiocode className='about_icon' />
                            <h4>Coding</h4>
                            <small>200+ Questions on Leetcode</small>
                        </article>
                    </div>
                    <p>I am a MERN stack developer based in New Delhi, India
                        specializing in React.js, Node.js, express,
                        MongoDB. Worked on full stack projects. Has great knowledge
                        of Data structures and Algorithms
                        and possess good communication
                        skills. Some of my hobbies include coding, travelling, playing badminton and chess. </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>
        </section>
    )
}

export default About