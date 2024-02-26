import React from 'react'
import { Link } from 'react-router-dom';

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
    </Link>
  </div>
)


const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Tony</span>
      <br/>
      this is cool
    </h1>
  ),
  2: (
    <InfoBox text="please work text ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhh 2"
    link="/about"
    btnText="Learn More" />
  ),
  3: (
    <InfoBox text="please work text ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhh 3"
    link="/about"
    btnText="Learn More" />
  ),
  4: (
    <InfoBox text="please work text ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhh 4"
    link="/contact"
    btnText="Learn More" />
  )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo