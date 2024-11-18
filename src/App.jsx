import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css'
import './services/api.jsx'
function App() {

  // abaixo, é uma chamada ao hook useState do React,
  // que é usado para adicionar estado a um componente funcional.

  // const [stateName, changeValueFunction] = saveTheResultHere('');
  const [input, setInput] = useState('');

  // O que são hooks?
  // - hooks são funções especiais que permitem que você "conecte"
  //   funcionalidades de estado e outros recursos do React a
  //   componentes funcionais.

  async function handleSearch(){
    if(input === ''){
      alert('Preencha algum CEP.')
      return;
    }
    try{
      
    }catch{

    }
  }

  return(
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      
      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu CEP"
        value={input}
        onChange={(e) => setInput(e.target.value)} //func anonima que recebe o evento e passa pro setInput
        />

        <button type="button" className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 12345-000</h2>

        <span>Rua teste X</span>
        <span>Complemento: algum teste</span>
        <span>Vila Feitosa</span>
        <span>São Paulo - SP</span>
      </main>

    </div>
  );
}

export default App