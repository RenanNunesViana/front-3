import useRequestData from "./useRequestData"

const ReturningStudents = () => {
    const students = useRequestData();

    return (
        <div>
            <h2>Lista de Alunos</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        <strong>Nome:</strong> {student.nome}, <strong>Email: </strong>{student.email}, <strong>Curso: </strong>
                        {student.curso}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReturningStudents