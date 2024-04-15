import './sobre.css';
function Sobre() {
    return (
        <div>
        <div className="sobre-container">
            <h1>Sobre o Site</h1>
            <p>
                O site "PrimeFlix" é um projeto desenvolvido como parte do método de avaliação do curso de DSM 3º semestre da Fatec Franca.<br></br>
                Foi utilizada a API do TMDB (https://www.themoviedb.org/) para fornecer os dados atualizados.<br></br>
                O site foi implementado para:<br></br>
            </p>
            <ul>
                <li>Buscar por filmes;</li>
                <li>Listar os filmes EM CARTAZ;</li>
                <li>Listar os filmes que serão lançados EM BREVE;</li>
                <li>Listar os filmes MAIS POPULARES;</li>
                <li>Listar os filmes MELHORES AVALIADOS;</li>
                <li>Criar uma LISTA com seus filmes FAVORITOS;</li>
                <li>Ver SINOPSE de cada filme;</li>
                <li>Redirecionar para o TRAILER do filme.</li>
            </ul>
            <p>   
                OBS.: a "minha lista" utiliza o localhoast do navegador para armazenar os dados.
            </p>
        </div>
        </div>
    );
}

export default Sobre;