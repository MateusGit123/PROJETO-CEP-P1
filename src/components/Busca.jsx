import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';

function Busca() {
  const [cep, setCep] = useState('');

  const buscarEndereco = async () => {
    if (!cep || cep.length !== 8 || !/^\d+$/.test(cep)) {
      alert('Por favor, digite um CEP válido com 8 números.');
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        alert('CEP não encontrado. Tente novamente.');
      } else {
        console.log(response.data);
      }
    } catch (error) {
      alert('Erro na requisição. Verifique sua conexão.');
      console.error('Erro ao buscar o CEP:', error);
    }
  };

  return (
    <div className="p-mt-4">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          placeholder="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
      </span>
      <Button label="Buscar" className="p-button-sm ml-2" onClick={buscarEndereco} />
    </div>
  );
}

export default Busca;
