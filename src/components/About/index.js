import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
            const timer = setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 3000);
        
            return () => clearTimeout(timer); 
        }, []);
    
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', '\u00A0', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I'm a sophomore at the University of Michigan studying Computer Science. I'm passionate about how 
                    software can solve real problems—whether by building sleek web apps or optimizing back-end systems. 
                    Every project pushes me to refine my skills and explore new ideas.</p>
                <p>
                I love exploring new tech and tackling complex challenges—even if it takes multiple efforts to get it right. 
                My passion for learning drives me to overcome setbacks, and I truly value collaboration as a path to 
                innovative solutions.
                </p>
                <p>
                When I'm not coding, you'll find me watching the Detroit Lions, Pistons, or Michigan Wolverines. I've been passionate about sports my whole life, playing basketball and tennis,
                and I'm always following sports, discussing plays, and seeing how teamwork and strategy lead to a win—insights I try to bring back into my 
                own projects. I love exploring new hobbies, getting outdoors, and embracing new challenges.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About
