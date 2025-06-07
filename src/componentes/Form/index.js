
import './Form.css'

import InputText from '../InputText';
import InputSelect from '../InputSelect';
import Btn from '../Btn';
import { useState } from 'react';

function Form(props) {

const [nome, setValue] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')


 const onSubmit = (event) => {
    event.preventDefault()
    props.onEmployerCreated({nome, cargo, imagem, time})
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
          <InputSelect value={time} setInputValue={setTime}  isRequired label="Time" placeholder="Selecione uma opção"  options={[{ label: '', value: '' },{ label: 'Programação', value: 'programacao' }, { label: 'Front-End', value: 'front' }, { label: 'Data Science', value: 'data' }, { label: 'Devops', value: 'devops' }]}/>
          <Btn>Criar Card</Btn>
      </form>
  );
}

export default Form;
