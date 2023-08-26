import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/Movies';

import Header from './components/Header';

function routesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies/:id" element={<Movies/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default routesApp;
