import './CardEmployer.css';
import { IoIosCloseCircleOutline } from "react-icons/io";


function CardEmployer(props) {
    return (
        <div className="card-employer" style={{ background: `linear-gradient(to bottom, ${props.timeColor} 0% 37%, #fff 35% 100%)` }}  key={props.employer.nome}>
            <img src="/imagens/user.png" alt={props.employer.nome} />
            <h3>{props.employer.nome}</h3>
            <h4>{props.employer.cargo}</h4>
            <h5>{props.employer.time}</h5>
           
           < IoIosCloseCircleOutline className='icon-delete' title='Deletar' color='#s6278F7' aria-label='Deletars' onClick={() => props.onDeleteEmployer(props.employer.id)} />
        </div>
    )
}   

export default CardEmployer