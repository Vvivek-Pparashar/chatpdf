import React from 'react';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from '../components/pages/Home/Home';
import Chat from '../components/pages/Chat';

const AllRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path = "/" element = {<Home/>} ></Route>
            <Route path = "/chat" element = {<Chat/>} ></Route>
        </Routes>
    </Router>
  )
}

export default AllRoutes