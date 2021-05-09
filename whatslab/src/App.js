import React from 'react';
import './App.css';
import InputDoUsuario from './Componentes/InputUsuario/InputDoUsuario';
import styled from 'styled-components';



const ContainerMensagem = styled.div`

   display:flex;
   flex-direction:colum;
  float:left;
  word-wrap: break-word;
  
  width: 30%;
  max-width: 35%;
  min-width: 8%;
  margin-bottom: 1em;
  margin-left:0.8em;
  border-radius: 0.6em;
  background-color: #ffff;
  
`



export class App extends React.Component {

  
  state = {
    mensagemEnviada: [
      {
        nomeUsuario: "" ,
        mensagemUsuario: ""
      }
    ]
 };

 adicionarMensagemNova = (nome, mensagem) =>{
  const novaMensagem = {
    nomeUsuario: nome,
    mensagemUsuario: mensagem
  }

  this.setState({
    mensagemEnviada: [...this.state.mensagemEnviada, novaMensagem],
    inputNome: '',
    inputMensagem: ''
  })
}

arrayDasMensagens = () => {

  return this.state.mensagemEnviada.map((informacoes) => {
  return (

      <ContainerMensagem>
      <h4>{informacoes.nomeUsuario}</h4>
      <p>{informacoes.mensagemUsuario}</p>
      </ContainerMensagem>
      )
  });
}
  render (){
   console.log (this.arrayDasMensagens()) 
   return (
    <div className ="App">
    <div className="page-section-container">   
    
      {this.arrayDasMensagens()}
      
        <InputDoUsuario 
          adicionarMensagemNova ={this.adicionarMensagemNova}
        />
        
      </div>
   </div>   
   )
  }
}

export default App;
