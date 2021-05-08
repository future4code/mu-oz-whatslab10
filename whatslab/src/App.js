import React from 'react';
import './App.css';
import InputDoUsuario from './Componentes/InputUsuario/InputDoUsuario';
import styled from 'styled-components'


const ContainerMensagem = styled.div`
display: flex
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
      <h4>{informacoes.nomeUsuario}</h4> <p>{informacoes.mensagemUsuario}</p>
      </ContainerMensagem>
      )
  });
}
  render(){
   console.log(this.arrayDasMensagens()) 
   return (
    <div className ="App">
    <div className="page-section-container">    
        <InputDoUsuario 
          adicionarMensagemNova ={this.adicionarMensagemNova}
        />
        
      </div>
   </div>   
   )
  }
}

export default App;
