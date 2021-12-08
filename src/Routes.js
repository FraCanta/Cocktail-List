import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './views/Form/Form'
import List from './views/List/List'
import Home from "./views/Home/Home";

export default function CustomRoutes(){
    return <Router>
        <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<div>Not found</div>} />
        </Routes>
    </Router>
}