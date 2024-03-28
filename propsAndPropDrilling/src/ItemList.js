

import React from 'react'
import LineItem from "./LineItem";

const Itemlist = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
          {items.map((item) => {
            return ( 
              <LineItem
              key={item.id}
              item={item}
              handleCheck={handleCheck}
              handleDelete={handleDelete}/>
          );
          })}
        </ul>
  ) 
}

// This code maps over an array of items and renders a <LineItem> component for 
// each item. Each <LineItem> is passed key, item, handleCheck, and handleDelete props, 
// where key is the unique identifier of each item, and the other props are functions
//  for handling checkbox clicks and deletions.






export default Itemlist

