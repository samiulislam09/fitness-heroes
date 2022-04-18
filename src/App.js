import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CheckOut from './components/CheckOut/CheckOut';
import Login from './components/Login/Login';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Register from './Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
