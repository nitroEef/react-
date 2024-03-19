// rafce 
import { useState } from 'react';
import './content.css'

const Content = () => {
  const [name, setName] = useState('basirah')
  const [count, setCount] = useState('0')




    const handleNameChange = () => {
    const names = ["fulani", "Oye", "eef"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]) 
  };

  const handleClick = () => {
    console.log("count") 
   }

   const handleClick2 = (name) => {
    console.log(`${name} eas clicked`)

   }

  return (
    <main className='student'>
      <h1> {name} </h1>
      <button onClick={handleNameChange}>Change Name</button>

      <button onClick={handleClick}>Click me</button>
      <button onDoubleClick={() => handleClick2('az')}>Click me</button>

    </main>
  )
}

export default Content
