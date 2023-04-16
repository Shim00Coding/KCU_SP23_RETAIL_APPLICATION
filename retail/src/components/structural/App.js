import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import { info } from './info';

import Layout from './Layout';
import Home from '../content/Home';
import ItemCard from '../content/ItemCard';
import ItemPage from '../content/ItemPage';
import Login from '../auth/Login';
import Register from '../auth/Register'


function App() {

    //const[info, setInfo] = useState([]);



    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Layout/>} >
                    <Route index element={<Home info={info.results}/>} />
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    {
                        info.results.map((item) => {
                            return <Route key = {item.id} path={`item/${item.id}`} element = {<ItemPage content={item} />} />
                        })
                    }
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;