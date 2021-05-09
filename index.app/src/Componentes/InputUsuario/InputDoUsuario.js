import React from 'react';
import styled from 'styled-components'


const Inpute = styled.input`
text-align: center;
max-width: 90%;
margin-left:1rem;
margin-bottom: 1rem;

`
const Submit = styled.input`
text-align: center;
margin-bottom: 1rem;
margin-right:0.8rem;
width:100px;
`
const Mensagem = styled.input`
text-align: center;
max-width: 90%;
margin-left:1rem;
margin-bottom: 1rem;

`


export class InputDoUsuario extends React.Component {

  state = {
        inputNome: "" ,
        inputMensagem: ""
 };

  pegarNome = (e) => {
    this.setState({inputNome: e.target.value})
  }

  pegaMensagem = (e) => {
    this.setState({inputMensagem: e.target.value})
  }

  render (){
    return (
      <div className ="Container-Input-Usuario">
        
       <Inpute
       value= {this.state.inputNome}
       onChange= {this.pegarNome} 
       placeholder= "Usuario" 
       /> 
       <Mensagem
       value= {this.state.inputMensagem}
       onChange= {this.pegaMensagem}
       placeholder= "Mensagem"
       />
       <Submit type="submit" onClick={() => this.props.adicionarMensagemNova(this.state.inputNome, this.state.inputMensagem)} />
      </div>
   );
 }
}
export default InputDoUsuario;
