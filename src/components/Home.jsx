import React from 'react';
import { useState } from 'react';
import { useSpring, animated} from 'react-spring';
import './styles/home.css';

export const Home = () => {
  const findYourAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' }, // Slide in from the left
    to: { opacity: 1, transform: 'translateX(0%&)' },
    config: { duration: 1000 }, // Adjust animation duration
  });

  const styleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' }, // Slide in from the right
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: { duration: 1000 }, // Adjust animation duration
  });

  const imageAnimation = useSpring ({
    opacity: 1,
    transform: 'translateY(0%)',
    from: { opcity: 0, transform: 'translateY(-100%)' },
    config: { duration: 1000 },
  });

  // const images = [
  //   'ASOS DESIGN brown shacket.png',
  //   'ASOS DESIGN cropped jacket.png',
  //   'ASOS DESIGN fluffy scarf.png',
  //   'ASOS DESIGN knitted cardigan.png',
  //   'ASOS DESIGN pink beanie.png',
  //   'ASOS DESIGN wool look harington.png',
  //   'Carhartt WIP green hoodie.png',
  //   'North Face brown beanie.png'
  // ]; 

 

  return (
    <div>
      <div className='wrapper'>
        <animated.div style={imageAnimation}>
          <img  src="/TPBhollow.png" alt="tpbhollow" />
        </animated.div>
        <animated.div className='overlay-text' style={findYourAnimation}>
          <div >FIND YOUR</div>
        </animated.div>
        <animated.div  className='overlay-text-2' style={styleAnimation}>
          <div>STYLE</div>
        </animated.div>
      </div>

      <section className='about'>
        <div className='container'>
          <div className='iten-wrapper'>
            <div className='item'>
              <img 
                className='picture'
                src='/collusion.png'
                alt='collusion'
                loading='lazy'
              />
              <div className='overlay'>
                <button className='shop-button'>Shop Now</button>
              </div>
            </div>
          </div>
          {/* image2 */}
          <div className='iten-wrapper'>
            <div className='item'>
              <img 
                className='picture'
                src='/reclaimed vintage.png'
                alt='reclaimedvintage'
                loading='lazy'
              />
              <div className='overlay'>
                <button className='shop-button'>Shop Now</button>
              </div>
            </div>
          </div>
          {/* image3 */}
          <div className='iten-wrapper'>
            <div className='item'>
              <img 
                className='picture'
                src='/topman.png'
                alt='topman'
                loading='lazy'
              />
              <div className='overlay'>
                <button className='shop-button'>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        <h1 className='aboutTitle'>STYLE IS YOURS.</h1>
          <h3 className='aboutSubtitle'>DISCOVER YOURSELF</h3>
            <div className='center-button'>
              <button className='dsvrButton'>DISCOVER</button>
            </div>
      </section>

      <section className='winter-shop'>
          <div className='winter-container'>
          <img className='background-img' src="Ig_@bryantdgiles.png" alt="winter-shop-flimg" />
            <img className='small-img' src="bomber loafer.jpg" alt="bomberloafer" />
            <p className='winter-title'>THE WINTER SHOP</p>
          </div>
      </section>

    <section>

    </section>

    <section className='footer'>
      <p className='endtag'>ARCHVE | created by Billy Nunes</p>
      <div className='link-container'>
        <a href="https://github.com/billy-nunes" target='_blank'>github </a>
        <a href="https://www.linkedin.com/in/billy-nunes/" target='_blank'>linkedin</a>
      </div>
    </section>
      

    </div>

   
  )
};


