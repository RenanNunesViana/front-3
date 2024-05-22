import { useState, useEffect } from "react"

const url = "http://localhost:3000/students"

const useRequestData = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setStudents(data);
    }
    fetchData();
  }, [])

  return students
}

export default useRequestData