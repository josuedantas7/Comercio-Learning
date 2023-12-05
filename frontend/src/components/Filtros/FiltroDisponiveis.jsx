import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FiltroDisponiveis = ({ data, setData }) => {
  const [disponiveis, setDisponiveis] = useState([]);
  const [indisponiveis, setIndisponiveis] = useState([]);

  useEffect(() => {
    // Executar essa parte quando disponiveis mudar
    setData(disponiveis);
  }, [disponiveis, setData]);

  useEffect(() => {
    // Executar essa parte quando indisponiveis mudar
    setData(indisponiveis);
  }, [indisponiveis, setData]);

  function filtrarDisponiveis() {
    setDisponiveis(data.filter(item => item.disponivel === true));
  }

  function filtrarIndisponiveis() {
    setIndisponiveis(data.filter(item => item.disponivel === false));
  }

  function filtrarTodos() {
    setData(data);
  }

  return (
    <div className="w-[150px] mx-auto">
      <h1 className="text-center text-lg mb-2 text-gray-600">Filtros de estado</h1>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => filtrarTodos()}
          className="bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg duration-300 text-white font-semibold"
        >
          Todos
        </button>
        <button
          onClick={() => filtrarDisponiveis()}
          className="bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg duration-300 text-white font-semibold"
        >
          Disponíveis
        </button>
        <button
          onClick={() => filtrarIndisponiveis()}
          className="bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg duration-300 text-white font-semibold"
        >
          Indisponíveis
        </button>
      </div>
    </div>
  );
};

export default FiltroDisponiveis;

FiltroDisponiveis.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};