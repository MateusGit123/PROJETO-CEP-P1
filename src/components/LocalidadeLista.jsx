import React from 'react';

function LocalidadeLista() {
  const localidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Recife', 'Fortaleza'];

  return (
    <div className="p-mt-4">
      <h3>Localidades Fictícias</h3>
      <ul>
        {localidades.map((cidade, index) => (
          <li key={index}>{cidade}</li>
        ))}
      </ul>
    </div>
  );
}

export default LocalidadeLista;
