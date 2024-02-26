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
      Hi, I am <span className="font-semibold">Tony Wang</span>
      <br/>
      This is a miniblog about the north shore ski mountains.
      <br/>
      Use arrow keys or click and drag to rotate the island to view each mountain.
    </h1>
  ),
  2: (
    <InfoBox text="Cypress Mountain: In West Vancouver"
    link="/about"
    btnText="Learn More" />
  ),
  3: (
    <InfoBox text="Grouse Mountain: In North Vancouver"
    link="/about"
    btnText="Learn More" />
  ),
  4: (
    <InfoBox text="Seymour Mountain: In Lynn Valley"
    link="/contact"
    btnText="Learn More" />
  )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo