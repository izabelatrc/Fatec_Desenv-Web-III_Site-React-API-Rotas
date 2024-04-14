import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';

function Home() {

    const [filmesCartaz, setFilmesCartaz] = useState([]);
    const [filmesEmBreve, setFilmesEmBreve] = useState([]);
    const [filmesPopulares, setFilmesPopulares] = useState([]);
    const [filmesMelhoresAvaliados, setFilmesMelhoresAvaliados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filmeBuscado, setFilmeBuscado] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        async function loadFilmesCartaz() {   
            const response = await api.get('/movie/now_playing',{
                params:{
                    api_key: '817d12607bc5e2e53f4382eceb8654b1',
                    language: 'pt-BR',
                    page: 1,
                    region: 'BR',
                }
            })
            setFilmesCartaz(response.data.results.slice(0, 12));
            setLoading(false);
        }

        async function loadFilmesEmBreve() {   
            const response = await api.get('/movie/upcoming',{
                params:{
                    api_key: '817d12607bc5e2e53f4382eceb8654b1',
                    language: 'pt-BR',
                    page: 1,
                    region: 'BR',
                }
            })
            setFilmesEmBreve(response.data.results.slice(0, 12));
            setLoading(false);
        }

        async function loadFilmesPopulares() {   
            const response = await api.get('/movie/popular',{
                params:{
                    api_key: '817d12607bc5e2e53f4382eceb8654b1',
                    language: 'pt-BR',
                    page: 1,
                    region: 'BR',
                }
            })
            setFilmesPopulares(response.data.results.slice(0, 12));
            setLoading(false);
        }

        async function loadFilmesMelhoresAvaliados() {   
            const response = await api.get('/movie/top_rated',{
                params:{
                    api_key: '817d12607bc5e2e53f4382eceb8654b1',
                    language: 'pt-BR',
                    page: 1,
                    region: 'BR',
                }
            })
            setFilmesMelhoresAvaliados(response.data.results.slice(0, 12));
            setLoading(false);
        }

        loadFilmesCartaz();
        loadFilmesEmBreve();
        loadFilmesPopulares();
        loadFilmesMelhoresAvaliados();
    
    }, []);

    // Função para lidar com a busca de filmes
    async function handleBuscarFilmes(termoBusca) {
        const response = await api.get("search/movie", {
        params: {
            api_key: "817d12607bc5e2e53f4382eceb8654b1",
            language: "pt-BR",
            query: termoBusca
        }
        });
        setFilmeBuscado(response.data.results.slice(0, 8));
    }

    // Função para lidar com o envio do formulário de busca
    function handleSubmit(e) {
        e.preventDefault();
        handleBuscarFilmes(input);
    }

     // Função para limpar a busca
    function handleLimparBusca() {
        setFilmeBuscado([]);
        setInput("");
    }

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando Filmes...</h2>
            </div>
        )
    }

    return (
        <div className="container">
        <div className="divisoria" id="busca"></div>
            <nav id="nav">
                <ul className='menu'>
                    <li><a href="/#em-cartaz">Em cartaz</a></li>
                    <li><a href="/#em-breve">Em breve</a></li>
                    <li><a href="/#populares">Populares</a></li>
                    <li><a href="/#melhores-avaliados">Melhores Avaliados</a></li>
                </ul>
            </nav>
            <form onSubmit={handleSubmit} className="form-busca" id="inicio">
                <input className="input-busca"
                placeholder="Procure por um filme..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                /> <br />
            {input && (
                <button type="button" onClick={handleLimparBusca}>
                    Limpar
                </button>
            )}
            {!input && <button type="submit">Buscar</button>}
            </form>
            <div>
                {filmeBuscado.length > 0 && (
                <div className="lista-filmes">
                    {filmeBuscado.map((filme) => (
                    <article key={filme.id}>
                        <strong>{filme.title}</strong>
                        <img
                        src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                        alt={filme.title}
                        />
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                    </article>
                    ))}
                </div>
                )}
            </div>
            <div className="divisoria"id="em-cartaz"></div>
            <div className="title">
                <h1>Em cartaz</h1>
            </div>            
            <div className="lista-filmes">
                {filmesCartaz.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    );
                })}
            </div>
            <div className="divisoria"id="em-breve"></div>
            <div className="title">
                <h1>Em breve</h1>
            </div>
            <div className="lista-filmes">
                {filmesEmBreve.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    );
                })}
            </div>
            <div className="divisoria" id="populares"></div>
            <div className="title">
                <h1>Populares</h1>
            </div>            
            <div className="lista-filmes">
                {filmesPopulares.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    );
                })}
            </div>
            <div className="divisoria" id="melhores-avaliados"></div>
            <div className="title">
                <h1>Melhores Avaliados</h1>
            </div>
            <div className="lista-filmes">
                {filmesMelhoresAvaliados.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}
    
export default Home;