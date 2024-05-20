import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Contact, Home, Login, Register, Reset } from './page';


// import {Home,Contact} from './page';

function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
     <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/reset' element={<Reset/>}/>
      </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
