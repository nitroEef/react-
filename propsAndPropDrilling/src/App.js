import {useEffect, useState} from "react";
import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItem from "./AddItem";
import Searchitem from "./Searchitem";


function App() {
  // const name = "Hayzed"

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppinglist")))

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

 useEffect(() => {
    console.log('render')
  })
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("Shoppinglist", JSON.stringify(newItems));
  };

const addItem = (item) => {
  const id = items.length ? items[items.length - 1] . id + 1 : 1;
  const myNewItem = {id, checked: false, item}
  const listItems = [...items, myNewItem] //spreading an array
  setAndSaveItems(listItems)
  // setItems(listItems);
  // localStorage.setItem("shoppinglist", JSON.stringify(listItems));

}

  const handleCheck = (value) => {
    const listItems = items.map((item) => item.id === value ? { ...item, checked: !item.checked } : item);
  setAndSaveItems(listItems) ;

    // setItems(listItems);

    // localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };



  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')
  }
   return (
    <div className="App">
      <Header title="Welcome to Props"/>
      
      <Searchitem
      search = {search}
      setSearch={setSearch}/>
      
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />

      <Content
      items={items.filter(item =>((item.item).toLowerCase().includes)(search.toLocaleLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete} />

      <Footer length={items.length} />
    </div>
  );
}

export default App;

// setitem is uploding thee whole item
