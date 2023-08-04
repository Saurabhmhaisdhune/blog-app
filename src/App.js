import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Authentication/Login';
import Home from './Pages/home/Home';
import PostBlog from './Components/PostBlog/PostBlog';
import Auth from './Pages/Authentication/Auth';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate replace to="/auth" />}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/postblog' element={<PostBlog/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
