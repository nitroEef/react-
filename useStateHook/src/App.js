import logo from './logo.svg';
import './App.css';
import Header from './Header'; 
import Content from './Content';
import Footer from './Footer';
;




function App() {
  const name = "hayzed";
    
  return (
    <div className="App">
      <Header title = "Welcome to props"/>  
      <Content />
      
      <Footer />
      
    </div>
  );
}

// usestate is for us to create our own component 

export default App;
