import '../scss/AboutUs.scss'
import React from "react";
import decoration from '/images/Decoration.png'
import signature from '/images/Signature.png'
import people from '/images/People.png'

const AboutUs = () => {
  return (

      <section className='about-us'>
          <div className='sec'>
              <h3 className='sec__hdl'>O nas</h3>
              <img className='sec__decoration' src={decoration} alt="dekoracja"/>
              <p className='sec__txt'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. <br /> Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
              <img className='sec__signature' src={signature} alt=""/>
          </div>
          <div className='people'>
              <img className='people__img' src={people} alt=""/>
          </div>

      </section>

  );
}

export default AboutUs;