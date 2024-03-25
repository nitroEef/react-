

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

export default Itemlist

