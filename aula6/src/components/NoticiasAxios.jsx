import { useEffect, useState } from "react";
import axios from 'axios'

const NoticiasAxios = () => {
    const url = "http://localhost:3000/noticias"

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(url)
                setNoticias(res.data);
            } catch (err) {
                console.error("try again")
            }
        }
        fetchData()
    }, [])
    return noticias;
}


export default NoticiasAxios