import React, { useEffect } from 'react'
import gour from "../../assets/gour.jpg"
import portfolio from "../../assets/po.jpeg"
import food from "../../assets/food.jpg"
import './project.css'
import aos from 'aos'
import 'aos/dist/aos.css'
const Project = () => {
    useEffect(() => {
        aos.init({ duration: 1000 });
    }, [])
    return (
        <section id="projects">
            <h5>Check out my</h5>
            <h2>Projects</h2>
            <div className='container project_container'>
                <article className='project_item' data-aos="flip-right">
                    <div className='project_item_img'>
                        <img src={gour} alt="..."></img>
                    </div>
                    <h3>GOURFOOD</h3>
                    <p>A restaurant management website made using Nodejs, express, MongoDB. Authentication using passport library.</p>
                    <div className='project_item_cta'>
                        <a href="https://gourfoodz.onrender.com/" target="_blank" className='btn'>Demo</a>
                        <a href="https://github.com/vansh-agg/gourfood_restaurant" target="_blank" className='btn btn-primary'>Link</a>
                    </div>
                </article>
                <article className='project_item' data-aos="zoom-in">
                    <div className='project_item_img'>
                        <img src={portfolio} alt="..."></img>
                    </div>
                    <h3>Portfolio</h3>
                    <p>The website on which you currently are! My personal portfolio completely made using React.js and its libraries.</p>
                    <div className='project_item_cta'>
                        <a href="https://github.com/vansh-agg?tab=repositories" target="_blank" className='btn btn-primary'>Link</a>

                    </div></article>
                <article className='project_item' data-aos="flip-left">
                    <div className='project_item_img'>
                        <img src={food} alt="..."></img>
                    </div>
                    <h3>Food Ordering System</h3>
                    <p>A group project-Food Ordering Website made using MySQL, PHP. Worked as a backend developer to make databases</p>
                    <div className='project_item_cta'>
                        <a href="https://github.com/vansh-agg/Foodordering" target="_blank" className='btn btn-primary'>Link</a>

                    </div></article>
            </div>
        </section>
    )
}

export default Project