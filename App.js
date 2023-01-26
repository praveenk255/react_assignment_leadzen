import React from "react";
import Fetch2 from './Fetch2';
import PaginatedItems from './PaginatedItems'
import Container from 'react-bootstrap/Container';
import Tg from './Tg'


function App() {


  
  return (
    <Container>
      <div className="App">
    
      <PaginatedItems itemsPerPage={3} />
    

    
    </div></Container>
    
  );
}

export default App;