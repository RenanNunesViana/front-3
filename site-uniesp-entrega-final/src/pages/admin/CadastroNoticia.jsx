import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import FormularioNoticia from "../../components/FormularioNoticia"

const url = "http://localhost:3000/noticias"

const CadastroNoticia = () => {

    const [titulo, setTitulo] = useState("")
    const [subtitulo, setSubtitulo] = useState("")
    const [texto, setTexto] = useState("")

    const navigate = useNavigate()

    const cadastrarNoticia = async (e) => {
        e.preventDefault()
        try {
            await axios.post(url, { titulo, subtitulo, texto })
            navigate('/admin-noticias')
        } catch (error) {
            console.error("Erro ao cadastrar a notícia: ", error)
        }
    }

    return (
        <FormularioNoticia
            onSubmit={cadastrarNoticia}
            titulo={titulo}
            setTitulo={setTitulo}
            subtitulo={subtitulo}
            setSubtitulo={setSubtitulo}
            texto={texto}
            setTexto={setTexto}
            buttonText="Cadastrar"
        />
    )
}

export default CadastroNoticia