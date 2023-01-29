import { useEffect } from 'react';
import './skills.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Progressbar from './progressbar';

const Skills = () => {
    useEffect(() => {
        aos.init({ duration: 1000 });
    }, [])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills" data-aos="fade-right">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Proficiency in Full Stack Development and Data structures & Algorithms.<br></br>Intermediate level knowledge of DBMS and Operating Systems.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <div className="bar">
                                        <Progressbar value="78" />
                                    </div>

                                    <h5>Front-end Development</h5>
                                </div>
                                <div className="item">
                                    <div className="bar">
                                        <Progressbar value="70" />
                                    </div>

                                    <h5>Back-end Development</h5>
                                </div>
                                <div className="item">
                                    <div className="bar">
                                        <Progressbar value="85" />
                                    </div>

                                    <h5>Data Structures</h5>
                                </div>
                                <div className="item">
                                    <div className="bar">
                                        <Progressbar value="80" />
                                    </div>
                                    <h5>Algorithms</h5>
                                </div>
                                <div className="item">
                                    <div className="bar">
                                        <Progressbar value="70" />
                                    </div>
                                    <h5>DBMS</h5>
                                </div>
                                <div className="item">
                                    <div className="bar">
                                        <Progressbar value="70" />
                                    </div>
                                    <h5>Operating Systems</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Skills