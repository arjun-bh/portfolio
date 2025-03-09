import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Contact =() => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();
    
        useEffect(() => {
                const timer = setTimeout(() => {
                    setLetterClass('text-animate-hover');
                }, 3000);
            
                return () => clearTimeout(timer); 
            }, []);

        const sendEmail=(e) => {
            e.preventDefault()

            emailjs
                .sendForm(
                    'service_email', 
                    'template_yye6svi',
                    refForm.current,
                    'DZxnxqfKo2bpvegu2'
                )
                .then(
                    () => {
                      alert('Message successfully sent!')
                      window.location.reload(false)
                    },
                    () => {
                      alert('Failed to send the message, please try again')
                    }
                )
        }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '\u00A0', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                    Thank you for visiting. If you have questions, ideas for collaboration, or just want to say hi, 
                    please reach out via email or the form below. I look forward to connecting with you!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Arjun Bharadwaj,
                    <br />
                    Unites States,
                    <br />
                    Based in Ann Arbor, MI <br />
                    <span>arjunbh@umich.edu</span>
                </div>
                <div className='map-wrap'>
                <MapContainer center={[42.28142, -83.74822]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[42.28142, -83.74822]}></Marker>
                </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />;
        </>
    )
}

export default Contact