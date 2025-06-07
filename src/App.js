import Banner from './componentes/Banner';
import Form from './componentes/Form';
import ListEmployers from './componentes/ListEmployers';
import Footer from './componentes/Footer';

import { useState, useEffect } from 'react';
function App() {

  const [employers, setEmployers] = useState([])

  useEffect(() => {
  }, [employers]);

  const listByTime = (time) => {
    return employers.filter(employer => employer.time === time)
  }

const onAddEmployer = (employer) => {
  setEmployers([...employers, employer])
} 


  return (
    <div className="App">
      <Banner />
      <Form onEmployerCreated={employer => onAddEmployer(employer)} />
      <ListEmployers employers={listByTime('programacao')} timeLabel={'Programação'} timeValue={'programacao'} />
      <ListEmployers employers={listByTime('front')} timeLabel={'Front-End'} timeValue={'front'} />
      <ListEmployers employers={listByTime('data')} timeLabel={'Data Science'} timeValue={'data'} />
      <ListEmployers employers={listByTime('devops')} timeLabel={'Devops'} timeValue={'devops'} />
      <Footer />
    </div>
  );
}

export default App;
