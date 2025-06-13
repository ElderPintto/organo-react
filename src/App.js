import Banner from './componentes/Banner';
import Form from './componentes/Form';
import ListEmployers from './componentes/ListEmployers';
import ModalFormNewTeam from './componentes/ModalFormNewTeam';
import Footer from './componentes/Footer';
import { v4 as uuidv4 } from 'uuid';

import { useState, useEffect } from 'react';
function App() {

  const [employers, setEmployers] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [times, setTime] = useState([
    {id: uuidv4() , label: 'Programação', value: 'programacao', color: '#82CFFA' },
    {id: uuidv4() , label: 'Front-End', value: 'front', color: '#82C3EC' },
    {id: uuidv4() , label: 'Data Science', value: 'data', color: '#82CFFA' },
    {id: uuidv4() , label: 'Devops', value: 'devops', color: '#E8F8FF' },
    {id: uuidv4() , label: 'UX e Design', value: 'ux', color: '#E8F8FF' },
    {id: uuidv4() , label: 'Mobile', value: 'mobile', color: '#E8F8FF' },
    {id: uuidv4() , label: 'Inovação e Gestão', value: 'inovacao', color: '#E8F8FF' },
  ])  

  useEffect(() => {
  }, [employers]);

  const listByTime = (time) => {
    return employers.filter(employer => employer.time === time)
  }

  const onAddEmployer = (employer) => {
    setEmployers([...employers, employer])
  } 

  const onDeleteEmployer = (id) => {
    setEmployers(employers.filter(employer => employer.id !== id))
  }

  const changeColorListEmployers = (id, color) => {
    setTime(times.map(t => t.id === id ? { ...t, color: color } : t))
  }



  return (
    <div className="App">
      <Banner />
      <Form onEmployerCreated={employer => onAddEmployer(employer)} times={times}  setOpenModal={() => setOpenModal(true) }/>
      {
        times.map(time =>  <ListEmployers key={time.value} employers={listByTime(time.value)} timeLabel={time.label} timeId={time.id} timeColor={time.color}  onDeleteEmployer={onDeleteEmployer} changeColorListEmployers={changeColorListEmployers} />)
      }
      <ModalFormNewTeam open={openModal} onAddNewTeam={ time => {
        console.log('ModalFormNewTeam', time)
        setTime([...times, time])
        setOpenModal(false)
      } 


      } onCloseModal={() => setOpenModal(false) } />
      <Footer />
    </div>
  );
}

export default App;
