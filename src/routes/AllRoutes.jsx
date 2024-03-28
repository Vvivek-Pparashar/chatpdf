import React from 'react';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from '../components/pages/Home/Home';
import Chat from '../components/pages/Chat';

const AllRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path = "/" exact  element = {<Home/>} ></Route>
            <Route path = "/chat" exact element = {<Chat/>} ></Route>
        </Routes>
    </Router>
  )
}

export default AllRoutes