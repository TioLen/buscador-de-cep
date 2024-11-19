import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css'
import api from './services/api'
function App() {

  // abaixo, é uma chamada ao hook useState do React,
  // que é usado para adicionar estado a um componente funcional.

  // const [stateName, changeValueFunction] = saveTheResultHere('');
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
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
      const response = await api.get(`${input}/json`);
      setCep(response.data)
  }catch{ 
      alert('erro ao buscar')
    }
  }

  return(
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      
      <div className="containerInput" onKeyDown={(e) =>{
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}>

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

      {Object.keys(cep).length >0 && (
      <main className="main">
        <h2>{cep.cep}</h2>

        <span>{'Logradouro: '+ cep.logradouro}</span>
        <span>{'Complemento: ' + cep.complemento}</span>
        <span>{'Bairro: ' + cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      </main>)}

    </div>
  );
}

export default App