import React from 'react';
import { useState } from 'react';
import Button from "./Button";
import Menu from "./Projects";
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const allButtons = ['All', ...new Set(projects.map(item => item.category))]

function PortfoliosPage ()  {
    const [menuItem, setMenuItems] = useState(projects);
  const [button, setButtons] = useState(allButtons);
  
  const filter = (button) => {

    if(button === 'All'){
        setMenuItems(projects);
        return;
    }

    const filteredData = projects.filter(item => item.category === button);
    setMenuItems(filteredData);
    }
    return(
        <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
          
    
        
        <div>
        <Button filter={filter} button={button} /> 
        
        <Menu menuItem={menuItem} /> 
        </div>
       
  </Section> 
    ) }

    export default PortfoliosPage;