import React from 'react';
import {FilterItem,FilterItems } from './ProjectsStyles' ;

function Button({filter, button}) {
  return (
      <FilterItems>
          {
              button.map((but, i) =>{
                  return  <FilterItem key={i} onClick={() => filter(but)}>
                      {but}
                      </FilterItem>
              })
          }
      </FilterItems>
  )
}

export default Button;