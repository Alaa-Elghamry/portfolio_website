import React, { useRef, useEffect } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span1 } from './HeroStyles';
import { init } from 'ityped';

const Hero = (props) => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Engineer", " Front-End Developer", "Content Creator"],
    });
  }, []);
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To My <br />
          Portfolio
        </SectionTitle>
        <SectionText style={{ paddingBottom: "0" }}>
          My name is Alaa Elghamry,
        </SectionText>
        <animatedText>
          <h1> I'm <Span1 ref={textRef} > </Span1> </h1>
          <br />
        </animatedText>
        {/* Animation Text */}

        <Button>
          <a href="https://alaa-elghamry.hashnode.dev/" target="_blank" style={{ color: 'white' }}>
            Visit My Blog
          </a>
        </Button>

      </LeftSection>
    </Section>
  );
};


export default Hero;