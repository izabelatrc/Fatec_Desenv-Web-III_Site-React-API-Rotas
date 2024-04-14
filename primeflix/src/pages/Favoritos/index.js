import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';

function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);
    }, []);

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));   
    }

    return (
        <div className="minha-lista">
            <h1>Minha Lista</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo :( </span>}

            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <article className='filmes'>
                                <strong>{item.title}</strong>
                                <img
                                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                                alt={item.title}
                                />
                            </article>
                            <div className="botoes">
                                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                                <button onClick={() => excluirFilme(item.id)}>Remover</button>
                            </div>
                        </li>
                    )
                })}
                
            </ul>

        </div>
    );
}

export default Favoritos;

