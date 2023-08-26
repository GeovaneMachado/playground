import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [nutri, setNutri] = React.useState(null);

    useEffect(() => {
        function loadApi() {
            fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
            .then(response => response.json())
            .then(data => setNutri(data))
            .catch(err => console.log(err));
        }
        loadApi();
    }, []);

    return (
          <div className="container">
                <header><h1>React Nutri</h1></header>
                <main>
                    {nutri && nutri.map(item => (
                        <article key={item.id} className="post">
                            <strong className={"title"}>{item.titulo}</strong>
                            <img src={item.capa} alt={item.titulo} className="cover"/>
                            <p className="subtitulo">{item.subtitulo}</p>
                            <a href="#" className="btn">Acessar</a>
                        </article>
                    ))}
                </main>
          </div>
    );
}

export default App;
