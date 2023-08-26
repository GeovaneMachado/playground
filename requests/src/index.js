import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomePage from "./HomePage";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function requestsNutri() {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

function homePage() {
    root.render(
        <React.StrictMode>
            <HomePage />
        </React.StrictMode>
    );
}

root.render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>
);
