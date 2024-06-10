import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import Postpage from "./Postpage";
import { useState, useEffect} from "react";
import {format} from 'date-fns';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "my first post",
      dateTime: "April 04, 2024 11:01:34 AM",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maxime odit odio perspiciatis labore corporis hic, nisi omnis nulla tempore! Corporis doloremque, ut excepturi accusantium ipsa veritatis tempore velit temporibus?",
    },
    {
      id: 2,
      title: "my second post",
      dateTime: "April 04, 2024 11:01:34 AM",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maxime odit odio perspiciatis labore corporis hic, nisi omnis nulla tempore! Corporis doloremque, ut excepturi accusantium ipsa veritatis tempore velit temporibus?",
    },
    {
      id: 3,
      title: "my third post",
      dateTime: "April 04, 2024 11:01:34 AM",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maxime odit odio perspiciatis labore corporis hic, nisi omnis nulla tempore! Corporis doloremque, ut excepturi accusantium ipsa veritatis tempore velit temporibus?",
    },
    {
      id: 4,
      title: "my fourth post",
      dateTime: "April 04, 2024 11:01:34 AM",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maxime odit odio perspiciatis labore corporis hic, nisi omnis nulla tempore! Corporis doloremque, ut excepturi accusantium ipsa veritatis tempore velit temporibus?",
    },
    {
      id: 5,
      title: "my fifth post",
      dateTime: "April 04, 2024 11:01:34 AM",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maxime odit odio perspiciatis labore corporis hic, nisi omnis nulla tempore! Corporis doloremque, ut excepturi accusantium ipsa veritatis tempore velit temporibus?",
    },
  ]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [PostBody, setPostBody] = useState('');

  useEffect(() => {
    const filteredResult = posts.filter((post) =>
    ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
    ((post.title).toLowerCase()).includes(search.toLowerCase()))

    setSearchResult(filteredResult.reverse())
  }, [posts, search])


  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id + 1 : 1
    const dateTime = format (new Date(), `MMMM dd, yyyy pp` )
    const newPost = {id, title: postTitle, dateTime, body: PostBody }
    const allPosts = [...posts, newPost]
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
    navigate('/')
  }
  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);

    navigate("/");
  };
  return (
    <div className="App">

      <Header title="DLT Blogs" />
      <Nav search={search} setSearch={setSearch} />

  <Routes>
        <Route path="/" element={<Home posts={searchResult} />} />

        <Route path="/post" element={<NewPost handleSubmit={handleSubmit} 
         postTitle={postTitle}
         PostBody={PostBody} setPostBody={setPostBody} 
        setPostTitle={setPostTitle}/>} />

        <Route path="/post/:id"
       element={<postPage posts={posts} handleDelete={handleDelete} />}
        />

        <Route path="/about/" element={<About />} />
        <Route path="*" element={<Missing />} />
  </Routes>

      <Footer />
    </div>
  );
}

export default App;