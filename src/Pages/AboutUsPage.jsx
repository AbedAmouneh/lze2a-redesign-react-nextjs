
import React from 'react';
import AboutUsSection from '../Components/Item/AboutUsSection';
import aboutus1 from '../img/aboutus-1.png';
import aboutus2 from '../img/aboutus-2.png';
import aboutus3 from '../img/aboutus-3.png';

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsSection
        image={aboutus1}
        title="ABOUT  LZE2A"
        description="In the heart of Beirut, amidst the vibrant energy and cultural tapestry of Lebanon, Lze2a was born. A spark ignited by a desire to capture the essence of Lebanese humor and infuse it into everyday products, Lze2a's journey began with a simple idea: to create a brand that celebrates the quirks, wit, and unique spirit of Lebanese culture."
      />
      
      <AboutUsSection
        image={aboutus2}
        title="MEET THE  CREATIVE MIND BEHIND IT ALL!"
        description="Meet Carmen Abou Serhal, the creative force and passionate owner behind Lze2a, a vibrant brand that brings to life bright and fun Lebanese-inspired products. Carmen's love for her Lebanese heritage is evident in every item she designs, infusing them with the rich colors, patterns, and spirit of her culture."
        reverse={true}

      />
      
      <AboutUsSection
      
        image={aboutus3}
        title="OUR  MISSION"
        description="At Lze2a our mission is to inject a dose of Lebanese fun and quirkiness into everyday life through a range of playful and colorful products that celebrate the unique humor, wit, and spirit of Lebanese culture."
      />
      <div className="yellow-bar"></div>
    </div>
  );
};

export default AboutUsPage;
