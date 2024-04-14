import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './filme.css';

import api from "../../services/api";
import { toast } from "react-toastify";

function Filme() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '817d12607bc5e2e53f4382eceb8654b1',
                    language: 'pt-BR',
                }
            })
            .then((response) => {
                setFilme(response.data);
                setLoading(false);
            })
            .catch(() => {
                console.log("Filme não encontrado");
                navigate("/", {replace: true});
                return;
            })                
        }

        loadFilme();

        return () => {
            console.log("Componente foi desmontado");
        }

    }, [navigate, id]);

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix");
        let filmesSalvos = JSON.parse(minhaLista) || [];
        const hasFilmes = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);
    
        if(hasFilmes){
            toast.warn("Esse filme ja foi salvo");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso");
    }


    if(loading){
        return(
            <div className="filme-info">
                <h2>Carregando detalhes do filme...</h2>
            </div>
        )
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span><br></br>

            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title}+trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    );
    }
    
export default Filme;