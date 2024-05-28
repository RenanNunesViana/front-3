import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import FormularioNoticia from "../../components/FormularioNoticia"

const url = "http://localhost:3000/noticias"

const EditarNoticia = () => {

    const { id } = useParams()

    const [titulo, setTitulo] = useState("")
    const [subtitulo, setSubtitulo] = useState("")
    const [texto, setTexto] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${url}/${id}`)
                setTitulo(res.data.titulo)
                setSubtitulo(res.data.subtitulo)
                setTexto(res.data.texto)
            } catch (error) {
                console.error("Erro ao buscar a notícia: ", error)
            }
        }
        fetchData()
    }, [id])

    const editarNoticia = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`${url}/${id}`, { titulo, subtitulo, texto })
            navigate('/admin-noticias')
        } catch (error) {
            console.error("Erro ao editar a notícia: ", error)
        }
    }

    return (
        <FormularioNoticia
            onSubmit={editarNoticia}
            titulo={titulo}
            setTitulo={setTitulo}
            subtitulo={subtitulo}
            setSubtitulo={setSubtitulo}
            texto={texto}
            setTexto={setTexto}
            buttonText="Editar"
        />
    )
}

export default EditarNoticia