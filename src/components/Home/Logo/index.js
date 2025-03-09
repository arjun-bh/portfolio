import './index.scss';
import Headshot from '../../../assets/images/Headshot3.png'
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';

const Logo = () => {
  const bgRef = useRef();
  const headshotRef = useRef();

  useEffect(() => {
    gsap.timeline()
      .to(bgRef.current, { duration: 1, opacity: 1 })
      .fromTo(headshotRef.current, { opacity: 0 }, { opacity: 1, delay: 0.5, duration: 2 });
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        ref={headshotRef}
        className="solid-logo"
        src={Headshot}
        alt="Headshot"
      />
    </div>
  )
}

export default Logo;
