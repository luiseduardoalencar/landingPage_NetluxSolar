
import React from 'react'
import BotaoContato from '/src/components/auxiliary/botaoContato.jsx'
//  ------------------------------------------------

const Banner = () => {
  return (
    
    <div className='flex items-center justify-center w-full h-fit lg:pr-4 lg:pl-4'>
        <div className='flex items-center lg:flex-row flex-col tw-formato-banner lg:rounded-[10px] lg:w-6/7 max-w-screen-xl max-lg:w-screen'>
            <div className='flex flex-col text-left m-auto max-lg:text-center max-lg:pt-5 max-lg:pb-5 lg:m-5'>
                <h1 className='tw-texto-banner text-white max-sm:m-4'>
                    QUER SABER MAIS SOBRE ENERGIA SOLAR ?
                    <br className='max-lg:hidden'/>
                    <span className='tw-texto-banner text-white max-sm:m-4'>
                        <br className='lg:hidden'/>
                        <br className='lg:hidden'/> FALE COM A GENTE AGORA MESMO!
                    </span>
                </h1>
            </div>
            <div className='flex items-center m-auto max-lg:pb-10 lg:m-5'> 
                <BotaoContato/>
            </div>
        </div>
    </div>
   
  )
}

export default Banner