
import React from 'react'


const Stats = () => {
  
  const estatisticas = [
    {
      id: 1,
      titulo: '+ 5 MWp',
      texto: 'INSTALADOS',
      linha: 'tw-linha-stats',
      espacamento: 'space-x-[25px]'
    },
    {
      id: 2,
      titulo: '+ R$ 1.000.000,00',
      texto: 'ECONOMIZADO PARA NOSSOS CLIENTES',
      linha: 'tw-linha-stats',
      espacamento: 'space-x-[25px]'
    },
    {
      id: 3,
      titulo: '+ 150 Clientes',
      texto: 'SATISFEITOS',
      linha: '',
      espacamento: ''
    }
  ]
  
  return (
    
    <div className='flex flex-row max-lg:flex-col items-center justify-center lg:space-x-[25px] text-center max-lg:space-y-[50px]'>
      {estatisticas.map((estatistica) => (
        <div key={estatistica.id} className={`flex flex-row items-center justify-center ${estatistica.espacamento}`}>
          <div className='flex flex-col items-center'>
            <h4 className='tw-titulo-stats drop-shadow-lg max-lg:tw-borda-texto'>{estatistica.titulo}</h4>
            <p className='tw-texto-stats'>{estatistica.texto}</p>
          </div>
          <div className={`${estatistica.linha} max-lg:hidden`}></div>
        </div>
      ))}
    </div>
   
  )
}

export default Stats