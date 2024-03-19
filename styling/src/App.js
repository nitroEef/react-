import logo from './logo.svg';
import './App.css';
import Header from './Header'; 
import Content from './Content';
import Footer from './Footer';





function App() {
  const name = "hayzed";
    
  return (
    <div className="App">
      <Header/>
      <Content />
      <Welcome />
      <Hero />
      <Footer />
      
    </div>
  );
}

export default App;
