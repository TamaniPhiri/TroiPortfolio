import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to<br/>
          Tamani's Portfolio
        </SectionTitle>
        <SectionText>
        As a Junior Full Stack Developer with a passion for creating seamless web and mobile experiences, I specialize in utilizing React, Node, Express, HTML, CSS, Mongo DB, Adobe XD and Figma to bring my clients' visions to life. My skills in these technologies, along with my expertise in React Native, allow me to build dynamic and user-friendly applications that stand out in today's digital landscape.
        </SectionText>
        <Button onClick={()=>window.location='https://www.linkedin.com/in/tamani-phiri-389b16256/'}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;