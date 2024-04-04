import { Route, Routes, useNavigate} from "react-router-dom"
import About from "./About"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Missing from "./Missing"
import Nav from "./Nav"
import Newpost from "./Newpost"
import Postpage from "./Postpage"
import {useState} from "react"


function App() {
  const [posts, setPosts] = useState([
    {
      id:1,
      title: "my first post",
      dateTime : "April 04, 2024 11:01:43am",
      body:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus voluptatum, minus illo alias doloribus nulla quasi dolorum eaque error incidunt blanditiis quia ex maxime optio reiciendis perferendis porro atque laudantium qui!",
    },

    {
      id:2,
      title: "my second post",
      dateTime : "April 04, 2024 11:01:43am",
      body:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus voluptatum, minus illo alias doloribus nulla quasi dolorum eaque error incidunt blanditiis quia ex maxime optio reiciendis perferendis porro atque laudantium qui!",
    },

    {
      id:3,
      title: "my third post",
      dateTime : "April 04, 2024 11:01:43am",
      body:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus voluptatum, minus illo alias doloribus nulla quasi dolorum eaque error incidunt blanditiis quia ex maxime optio reiciendis perferendis porro atque laudantium qui!",
    },

    {
      id:4,
      title: "my fourth post",
      dateTime : "April 04, 2024 11:01:43am",
      body:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus voluptatum, minus illo alias doloribus nulla quasi dolorum eaque error incidunt blanditiis quia ex maxime optio reiciendis perferendis porro atque laudantium qui!",
    },

    {
      id:5,
      title: "my fifth post",
      dateTime : "April 04, 2024 11:01:43am",
      body:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus voluptatum, minus illo alias doloribus nulla quasi dolorum eaque error incidunt blanditiis quia ex maxime optio reiciendis perferendis porro atque laudantium qui!",
    }
  ])
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const handleDelete = (id) => {
    const postList = posts.filter(post => post.id !== id)
    setPosts(postList)
    navigate('/')
  }

  return (
    <div className="App">
      <Header title="DLT blogs"/>
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Home posts={posts}/>}  />   
        <Route path="/post" element={<Newpost/>} />
        <Route path="/post/:id" element={<Postpage posts={posts} handleDelete={handleDelete}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Missing/>}  />


      </Routes>
      
      <Footer/>

    </div>
  )
}

export default App
