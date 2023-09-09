import {db} from './firebaseConnection';
import {useState, useEffect} from 'react';
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
import './app.css';

function App() {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');

    async function handleAdd() {
        await setDoc(doc(db, "posts", "123456"), {
            titulo: titulo,
            autor: autor
        }).then(() => {
            setTitulo('');
            setAutor('');
            alert('Dados cadastrados com sucesso!');
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>FireApp</h1>
            </header>
            <div className="container">
                <label>Titulo:</label>
                <textarea
                    name="titulo"
                    placeholder="Digite o título "
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <label>Descrição:</label>
                <input
                    name="autor"
                    placeholder="Digite o autor"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                />
                <button onClick={handleAdd}>Enviar</button>
            </div>
        </div>
    );
}

export default App;
