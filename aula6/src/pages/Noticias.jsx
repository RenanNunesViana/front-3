import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import NoticiasAxios from "../components/NoticiasAxios";

const Noticias = () => {
    const url = "http://localhost:3000/noticias"

    const ResgatandoDados = () => {
        const [noticias, setNoticias] = useState([]);

        useEffect(() => {
            async function fetchData() {
                const res = await fetch(url)
                const data = await res.json();
                setNoticias(data)
            }
            fetchData()
        }, [])
        return noticias;
    }

    const noticias = NoticiasAxios();

    return (
        <div>
            <h1>Noticias</h1>
            <ul>
                {noticias.map((noticia) => (
                    <li key={noticia.id}>
                        <Link to={`/visualiza-noticia/${noticia.id}`}> <h2>{noticia.titulo}</h2></Link>, <strong>Subtitulo: </strong>{" "}
                        {noticia.subtitulo}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Noticias