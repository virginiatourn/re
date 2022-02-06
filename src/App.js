import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import ItemDetailContainer from "./component/ItemDetailContainer";
import Layout from './components/Layout';


const App = () => {
  return (
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
    <Route path="/"  element={<Home/>}/>
     <Route path="*" element={<NoPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;