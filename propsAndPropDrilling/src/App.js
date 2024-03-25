import { useState } from "react";
import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItem from "./AddItem";


function App() {
  // const name = "Hayzed"

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

  const [newItem, setNewItem] = useState('')

const addItem = (item) => {
  const id = items.length ? items[items.length - 1] . id + 1 : 1;
  const myNewItem = {id, checked: false, item}
  const listItems = [...items, myNewItem] //spreading an array
  setItems(listItems);
  localStorage.setItem("shoppinglist", JSON.stringify(listItems));

}

  const handleCheck = (value) => {
    // console.log(key: ${id});
    const listItems = items.map((item) =>
      item.id === value ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
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
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />

      <Content
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete} />

      <Footer length={items.length} />
    </div>
  );
}

export default App;

// setitem is uploding thee whole item
