// rafce 
import {useState} from 'react'
import './content.css'



const Content = () => {

  const [name, setName] = useState['Basirah']

    const handleNameChange = () => {
    const names = ["fulani", "Oye", "eef"];
    const int = Math.floor(Math.random() * 3);
    return names[int] 
  };

  const handleClick = () => {
    console.log("you clicked") 
   }

   const handleClick2 = (name) => {
    console.log(`${name} eas clicked`)

   }

  return (
    <main className='student'>
      <h1> {name} </h1>
      <button onClick={handleClick}>Click me</button>
      <button onDoubleClick={() => handleClick2('az')}>Click me</button>

    </main>
  )
}

export default Content
