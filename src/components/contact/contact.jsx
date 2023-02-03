import React, { useEffect, useRef, useState, useContext } from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { RiSendPlaneFill } from 'react-icons/ri'
import emailjs from 'emailjs-com';
import aos from 'aos'
import 'aos/dist/aos.css'
import ActionAlerts from './popup'
import { contactcontext } from './contexts'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y377seo', 'template_2y9nws6', form.current, 'TZ-q4Bz3gTqs6ovB9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    useEffect(() => {
        aos.init({ duration: 1000 });
    }, [])
    const [btn, setbtn] = useState(false);
    return (
        <section id="contact" data-aos="flip-right">
            <h5>Get in touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='contact_option'>
                        <AiOutlineMail className='contact_icon' />
                        <h4>Email</h4>
                        <h5>vanshagg2003@gmail.com</h5>
                        <a href="mailto:vanshagg2003@gmail.com" target="_blank">Send Email</a>
                    </article>
                    <article className='contact_option'>
                        <BsWhatsapp className='contact_icon' />
                        <h4>Whatsapp</h4>
                        <h5>+91 8700282622</h5>
                        <a href="https://wa.link/1cg8yw" target="_blank">Send Message</a>
                    </article>

                </div>
                <contactcontext.Provider value={{ btn, setbtn }}>
                    <form ref={form} onSubmit={(event) => {
                        sendEmail(event)
                        setbtn(true)
                    }}>
                        <input onClick={() => { setbtn(false) }} type="text" name="name" placeholder='Your full name' required />
                        <input onClick={() => { setbtn(false) }} type="email" name="email" placeholder='Your email' required />
                        <textarea onClick={() => { setbtn(false) }} name="message" rows="7" placeholder="Type your message here..." required />
                        <button type="submit" className='btn btn-primary'>Send message <RiSendPlaneFill /></button>
                        {btn && <ActionAlerts />}
                    </form>
                </contactcontext.Provider>
            </div>
        </section>
    )
}

export default Contact