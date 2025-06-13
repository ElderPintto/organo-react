
import './Form.css'

import InputText from '../InputText';
import InputSelect from '../InputSelect';
import Btn from '../Btn';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form(props) {

const [nome, setValue] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')


 const onSubmit = (event) => {
    
    event.preventDefault()
    props.onEmployerCreated({nome, cargo, imagem, time, id:uuidv4()})
    setValue('')
    setCargo('')
    setImagem('')
    setTime('')
 }

  return (
      <form className='form' onSubmit={onSubmit}>
          <h2>Preencha os dados para criar o card do colaborador.</h2>
          <InputText value={nome} setInputValue={setValue} isRequired  label="Nome" placeholder="Digite seu nome" />
          <InputText value={cargo} setInputValue={setCargo}  isRequired label="Cargo" placeholder="Digite seu cargo" />
          <InputText value={imagem} setInputValue={setImagem} isRequired label="Imagem" placeholder="Digite o endereço da imagem" />
          <InputSelect value={time} setInputValue={setTime}  isRequired label="Time" placeholder="Selecione uma opção"  options={props.times}/>
           <div>    
                <p> 
                    <span   > Não tem o time que vc quer ?</span> <strong onClick={() => props.setOpenModal() }> Criar novo time </strong>
                </p>
           </div>
          <Btn>Criar Card</Btn>
      </form>
  );
}

export default Form;
