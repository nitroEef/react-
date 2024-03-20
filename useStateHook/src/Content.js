// local storage is an object in js , not a method or function 
// but it is a part of web storage api and provide method for 
// storing and accessing data locally in the users web browsers 
// it cant work alone without JSON.stringify and JSON.parse 


import React, { useState } from "react";
import { FaTrashRestoreAlt } from "react-icons/fa";
import "./content.css";

const Content = () => {
  // const [name, setName] = useState('Basirah')
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "A bag of Garri",
    },
    {
      id: 2,
      checked: false,
      item: " Rice",
    },
    {
      id: 3,
      checked: false,
      item: "Semo",
    },
    {
      id: 4,
      checked: false,
      item: "Ponmo",
    },
  ]);

  const handleCheck = (id) => {
    // console.log(key: ${id});
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id); 
      setItems(listItems);
  }

  return (
    <main className="student">
      <ul>
        {items.map((item) => {
          return (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onClick={() => handleCheck(item.id)}
                checked={item.checked}
              />

              <label 
              style={(item.checked) ? {textDecoration:"line-through"} :null}
              onDoubleClick={() => handleDelete(item.id)} >{item.item}</label>
              <FaTrashRestoreAlt
             // onClick={() => handleDelete(item.id)} //
              />
              
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Content;