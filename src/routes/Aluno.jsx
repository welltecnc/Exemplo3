import {Dados} from '../components/Dados'

const Aluno=()=>{
    //trazendo os dados com desestrcut
    
    const {nome,email,idade}=Dados
    
    return(
        <>
        <h1>PÁGINA ALUNO</h1>
        <p>Nome do Aluno:{nome}</p>
        <p>Email do Aluno:{email}</p>
        <p>Idade do Aluno:{idade}</p>
        </>
    )
}
export default Aluno