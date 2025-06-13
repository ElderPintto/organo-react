
import './ModalFormNewTeam.css'
import InputText from '../InputText';
import Btn from '../Btn';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IoIosCloseCircleOutline } from "react-icons/io";


function ModalFormNewTeam(props) {

const [label, setName] = useState('')
const [color, setColor] = useState('')



 const onSubmit = (event) => {
    
    event.preventDefault()
    props.onAddNewTeam({label, color, value: label, id:uuidv4()})
    setName('')
    setColor('')
 }

  return (

    <dialog open={props.open}>
        <form className='form' onSubmit={onSubmit}>
            <h2>Preencha os dados para criar um novo time</h2>
            <InputText value={label} setInputValue={setName} isRequired  label="Nome" placeholder="Digite um nome" />
            <input style={{width: '100%', marginBottom: '1rem'}}  type="color" required label="cor" onChange={(event) => setColor(event.target.value)} value={color}></input>
            <Btn>Criar Card</Btn>
             < IoIosCloseCircleOutline className='icon-delete' title='Deletar' color='#s6278F7' aria-label='Deletars' onClick={() => props.onCloseModal()} />
        </form>
    </dialog>

  );
}

export default ModalFormNewTeam;
