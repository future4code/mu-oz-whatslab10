import React from 'react';
import styled from 'styled-components'

const Inpute = styled.input`
text-align: center;
`
const Submit = styled.input`
text-align: center;
`
const Mensgaem = styled.input`
text-align: center;
`


function InputDoUsuario() {
    
    return (
    <form >
      <div className ="Container-Input-Usuario">
       <Inpute type="text" placeholder= "Usuario"  />
       <Inpute type="text" placeholder= "Mensagem"  />
       <Mensgaem type="submit" placeholder="Enviar" />
      </div>
    </form>  
   );
}

export default InputDoUsuario;