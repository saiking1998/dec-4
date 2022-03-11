
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button,ProgressBar} from 'react-bootstrap';
import React,{useState} from 'react';
import TableData from './data/TableData';


function App() {
  const [show,setShow]= useState(10);
 
  return (
    <Container className="App">
      {/* {show &&  <TableData />}
      {show}
      <Button variant="warning" onClick={()=>setShow(show+1)}>{show}</Button> */}
     <ProgressBar now={show} label={`${show}%`} />
     <Button variant="success" onClick={()=>setShow(show+5)}>click to increment</Button>
    </Container>
  );
}

export default App;
