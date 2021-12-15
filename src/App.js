import './App.css'
import Header from './Header';
import Content from './Content';
import Footer from './Footer'
import Section from './Section'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products';
// import {Routes, Route} from '../node_modules/react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route exact path="/" component = {Home} />
        <Route exact path="/products" component = {Products} />
      </Routes>
      {/* <Content />
      <Section />
      <Footer /> */}
    </div>
  );
}

export default App;
