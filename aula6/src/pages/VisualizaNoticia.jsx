import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VisualizaNoticia = () => {

    const { id } = useParams()
    const url = `http://localhost:3000/noticias/${id}`
    const [visualizaNoticia, setVisualizaNoticiia] = useState({})

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url)
            const data = await res.json();
            setVisualizaNoticiia(data)
        }
        fetchData()
    })



    return (
        <div>
            <h1>{visualizaNoticia.titulo}</h1>
            <h2>{visualizaNoticia.subtitulo}</h2>
            <p>{visualizaNoticia.texto}</p>
        </div>
    )
}

export default VisualizaNoticia