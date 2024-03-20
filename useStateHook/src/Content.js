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


const handleCheck = (id) => {
  // console.log(`key:${id}`)
} 

  return (
    <main className='student'>
<ul>
  {items.map((item) => (
   <li className='item' key={item.id}>
    <input type="checkbox" 
    onClick={()=>handleCheck(item.id)}
    checked={item.checked} />
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
