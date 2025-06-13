import './ListEmployers.css'
import CardEmployer from '../CardEmployer';

function ListEmployers(props) {
    return (
        props.employers.length > 0 && <div className={`list-employers`} >
            <input className='input-color' type="color" value={props.timeColor} onChange={(event) => props.changeColorListEmployers(props.timeId, event.target.value)}></input>
            <h4><strong>{props.timeLabel}</strong></h4>
            {props.employers.map((employer) => {
                return (
                    <CardEmployer key={employer.nome} employer={employer} onDeleteEmployer={props.onDeleteEmployer} timeColor={props.timeColor} />
                )
            })}
            <span style={{ backgroundColor: props.timeColor }}></span>
        </div>
    );
}

export default ListEmployers

