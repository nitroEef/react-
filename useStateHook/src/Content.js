// rafce 
import { useState } from 'react';
import { GoTrash } from "react-icons/go";

import './content.css'

const Content = () => {
  // const [name, setName] = useState('basirah') 
  const [items, setItems] = useState([
    {
      id : 1,
      checked : false,
      item : 'garri'

    },
    {
      id : 2,
      checked : false,
      item : 'bread'

    },

    {
      id :3,
      checked : false,
      item : 'chips'

    },

    {
      id : 4,
      checked : false,
      item : 'beans'

    },
  ])




  //   const handleNameChange = () => {
  //   const names = ["fulani", "Oye", "eef"];
  //   const int = Math.floor(Math.random() * 3);
  //   setName(names[int]) 
  // };



  //  const handleClick2 = (name) => {
  //   console.log(`${name} eas clicked`)

  //  }

  return (
    <main className='student'>
      {/* <h1> {name} </h1>
      <button onClick={handleNameChange}>Change Name</button>

      <button onClick={handleClick}>Click me</button>
      <button onDoubleClick={() => handleClick2('az')}>Click me</button> */}


<ul>
  {items.map((item) => (
   <li className='item' key={item.id}>
    <input type='checkbox' checked={item.checked} />
    <label>{item.item}</label>
    <GoTrash />
    <button>Delete</button>


</li> 
  ))}
</ul>
    </main>
  )
}

export default Content
