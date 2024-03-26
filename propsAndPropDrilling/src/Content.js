import React, { useState } from "react";
import "./content.css";
import ItemList from "./ItemList";

const Content = ({items, handleCheck, handleDelete}) => {
  // const [name, setName] = useState('Basirah')
  
  return (
    <main className="student">
    {items.length ? (
          <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          
          
          />
    )  :   (
         <p style={{marginTop: "2rem"}}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;


//props driving allow us to pass a data from 
// parent to child element 