import image from '../assets/images/ski_cypress.JPG'
import Image from 'react-image-resizer';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className = "blue-gradient_text font-semibold">Tony</span>
      </h1>
      <br/>
      <div>
        <p>
          I am an avid skier that grew up in Vancouver, British Columbia. This is a mini blog about the mountains near where I grew up
          that I still enjoy going up to every winter.
        </p>
      </div>

      <div className="py-10 fle flex-col">
        <h3 className="subhead-text">Why Should You Read?</h3>
        <br/>
        <p>

        I've dedicated 16 years to skiing and have been snowboarding for 4. While I'm not a professional, 
        I feel I have a good grasp of all levels of slopes on any given mountain. I frequent expert-level 
        terrain on skis, whereas I lean towards cruising beginner to intermediate terrain on a snowboard, 
        giving me a wide scope of experience. I'm have also been a CSIA certified ski instructor since
        2021.
        </p>
      </div>
    
      <div className="centerImage">
        <img src={image} alt="image" className="photo"/>
      </div>

    </section>
  )
}

export default About