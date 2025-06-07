import './CardEmployer.css';


function CardEmployer(props) {
    return (
        <div className={`card-employer  ${props.employer.time}`} key={props.employer.nome}>
            <img src="/imagens/user.png" alt={props.employer.nome} />
            <h3>{props.employer.nome}</h3>
            <h4>{props.employer.cargo}</h4>
        </div>
    )
}   

export default CardEmployer