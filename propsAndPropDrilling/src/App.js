import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header'; 
import Content from './Content';
import Footer from './Footer';




function App() {
  // const name = "hayzed";
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
  };

    
  return (
    <div className="App">
      <Header title ="welcome to props"/>  
      <Content 
      items={items} 
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      
      <Footer length={items.length} />
      
    </div>
  );
}

// usestate is for us to create our own component 

export default App;
