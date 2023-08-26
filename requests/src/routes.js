import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Product from "./Pages/Product";

import Header from "./components/Header";

function RoutesApp(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<Product />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;