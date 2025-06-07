import './ListEmployers.css'
import CardEmployer from '../CardEmployer';

function ListEmployers(props) {
    return (
        props.employers.length > 0 && <div className={`list-employers`}>
            <h4><strong>{props.timeLabel}</strong></h4>
            {props.employers.map((employer) => {
                return (
                    <CardEmployer key={employer.nome} employer={employer} />
                )
            })}
            <span className={props.timeValue}></span>
        </div>
    );
}

export default ListEmployers

