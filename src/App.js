import React from 'react';

const App = () => {
  const [produto, setproduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({ target }) {
    setproduto(target.value);
  }

  return (
    <>
      <form>
        <h2>Cores</h2>
        <label htmlFor="">
          <input
            type="radio"
            onChange={(event)=> setCor(event.target.value)}
            value="azul"
            checked={cor === 'azul'}
          />
          Azul
        </label>

        <label htmlFor="">
          <input
            type="radio"
            onChange={(event)=> setCor(event.target.value)}
            value="vermelho"
            checked = {cor === 'vermelho'}
          />
          Vermelho
        </label>


        {produto}
        <h2>Produtos</h2>
        <label htmlFor="">
          <input
            type="radio"
            onChange={handleChange}
            value="smartphone"
            checked={produto === 'smartphone'}
          />
          Smartphone
        </label>
        <label htmlFor="">
          <input
            type="radio"
            onChange={handleChange}
            value="notebook"
            checked={produto === 'notebook'}
          />
          Notebook
        </label>
      </form>
    </>
  );
};

export default App;
