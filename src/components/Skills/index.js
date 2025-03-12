import React, { useEffect, useState, useRef } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import TagCloud from 'TagCloud';

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const sphereRef = useRef(null);
  const isTagCloudLoaded = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    const texts = [
      'JavaScript', 'React', 'Next.js', 'Supabase', 'Python',
      'ROS', 'PID', 'Machine Learning', 'C++', 'HTML',
      'CSS', 'Git', 'NLP', 'Data Analysis', 'Statistics',
      'Full Stack', 'Web Development', "Beautiful Soup"
    ];
  
    const options = {
      radius: 300,
      maxSpeed: 'fast',
      initSpeed: 'normal',
      direction: 135,
      keep: true,
    };
  
    const container = sphereRef.current;
  
    if (container && !isTagCloudLoaded.current) {
      TagCloud(container, texts, options);
      isTagCloudLoaded.current = true;
    }
  
    return () => {
      clearTimeout(timer);
      if (container) {
        container.innerHTML = '';
        isTagCloudLoaded.current = false;
      }
    };
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={
                "Skills & Experience".split("").map(char => char === " " ? "\u00A0" : char)
              }
              idx={15}
            />
          </h1>
          <p>
            In the VOID Tech club, I'm currently developing Open Course, a full-stack app built with Next.js, React, and Supabase to help University of Michigan students connect, share resources, and organize study groups. This project has enhanced my skills in modern web development, real-time databases, and secure user authentication.
          </p>
          <p>
            On the Michigan Robotic Submarine team, I create navigation and perception software for an autonomous underwater vehicle using Python, ROS, and PID algorithms. Collaborating closely with an interdisciplinary team has strengthened my ability to integrate complex software with hardware systems.
          </p>
          <p>
            Additionally, I've explored machine learning through projects such as developing a C++ NLP classifier to categorize forum posts and leading an analytics team modeling NBA player performance. These experiences reflect my passion for applying data-driven solutions to real-world problems.
          </p>
          <p>
            For more about my professional experiences, check out my{' '}
            <a href="https://linkedin.com/in/arjun-bharadwaj-258418289" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
            {' '}or view my{' '} 
            <a href="/Arjun_Bharadwaj_Resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>.
          </p>
        </div>
        <div className="tagcloud-container">
          <div className="tagcloud" ref={sphereRef}></div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;
