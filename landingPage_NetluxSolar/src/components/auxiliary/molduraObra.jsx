
import React from 'react'
import Solo from '/src/assets/images/Solo.png'
import Copperline from '/src/assets/images/Copperrline.png'
import Residencial from '/src/assets/images/Residencial.jpeg'


const MolduraObra = () => {
    
    const obras = [
        {
            id: 1,
            titulo: '21,12kWp - Teresina, PI',
            subtitulo: 'Residencial',
            foto: Residencial
        },
        {
            id: 2,
            titulo: '667,63kWp - Parnaiba, PI',
            subtitulo: 'Industrial',
            foto: Copperline
        },
        {
            id: 3,
            titulo: '235,44kWp - Caxias, MA',
            subtitulo: 'Solo',
            foto: Solo
        },
    ]
    

    return (
    
    <div>
        
        <div className='relative w-full h-fit flex flex-row items-center justify-center max-lg:flex-col max-lg:space-y-12 lg:space-x-[50px]'>
        {obras.map((obra) => (
        <div key={obra.id} className='relative lg:w-[370px] lg:h-[372px] max-lg:w-[300px] max-lg:h-[272px] flex flex-col items-center justify-center bg-orange-500 z-0 rounded-[20px] tw-moldura-carrossel'>
            <div className='flex flex-col items-center justify-center'>
                <div className='lg:mt-[260px] max-lg:mt-[190px]'>
                    <p className='tw-titulo-carrossel'>{obra.titulo}</p>
                    <p className='tw-subtitulo-carrossel'>{obra.subtitulo}</p>
                </div>
            </div>
            <img src={obra.foto} className='absolute z-40 w-[90%] -top-4 drop-shadow-xl rounded-[25px]'/>
        </div>
        ))}
        
        </div>
        
    </div>
   
  )
}

export default MolduraObra