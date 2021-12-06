import React from 'react';
import { useState } from "react";
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, 
TagList, TitleContent, UtilityList, Img, ImgContainer } from './ProjectsStyles';


function Menu({menuItem=[]}) {
  return(
<GridContainer>
      {menuItem.map((p, i) => {
        return (
          <BlogCard key={i}>
         <ImgContainer>
          <Img src={p.image} />
          </ImgContainer>
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.code}>Code</ExternalLinks>
              <ExternalLinks href={p.visit}>Visit</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
  </GridContainer>

  ) }
    
export default Menu;