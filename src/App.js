import React, { Component } from 'react';
import api from './api';

class App extends Component{
state = {
  filmes: [],
}

async componentDidMount(){
  const response = await api.get('star+wars') // batman

  //console.log(response.data);

  this.setState({filmes: response.data});
}

  render(){
    const {filmes}= this.state;
    return(
      <div>
        <h2>Listar os Filmes</h2>
        
        {filmes.map(filme =>(
          <l1 key={filme.show.id}>
            <h3>
              <b>Título: </b>
              {filme.show.name}
            </h3>
            <p>{filme.show.url}</p>
            <p>{filme.show.language}</p>
          </l1>
        ))}
      </div>
    );
  };
};

export default App;
