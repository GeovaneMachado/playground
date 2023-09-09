import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/Movies';
import Favorites from './pages/Favorites';
import Error from './pages/Error';

import Header from './components/Header';

function routesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies/:id" element={<Movies/>}/>
                <Route path="/favorites" element={<Favorites/>}/>

                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default routesApp;
