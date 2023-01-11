
import React from 'react'
import Stats from '../auxiliary/stats.jsx'
import MolduraObra from '../auxiliary/molduraObra.jsx'
import LogoBYD from '/src/assets/images/logoBYD.png'
import MolduraPPP from '../auxiliary/molduraPPP.jsx'



const Obras = () => {
  return (
   
    <section className='w-full h-fit tw-background-obras max-md:pt-[50px] relative'>
        
        <div name='OBRAS' className=' relative flex flex-col xl:pl-[75px] lg:pl-[50px] lg:pt-[50px] p-4 max-md:w-full max-lg:text-center'>
            <h1 className='tw-fonte-titulo'>
                <span className='text-white'>Algumas obras </span>
                <span className='tw-cor-destaque-titulo'>Netlux Solar</span>
            </h1>
            <p className='tw-fonte-texto text-white'>
                Desde o primeiro contato até o pós venda, proporcionaremos
            </p>
            <p className='tw-fonte-texto text-white'>
            excelência e qualidade em todas as fases dos nossos projetos.
            </p>
        </div>
       
        <div className='pt-[50px] relative max-xl:pr-4  max-xl:pl-4'>
            <MolduraObra/>
        </div>
       
        <div className='relative pt-[100px] max-lg:pb-[100px] max-md:pl-1 max-md:pr-1'>
            <Stats/>
        </div>
        
        <div className='lg:grid lg:grid-cols-2 lg:gap-28 xl:pl-[75px] lg:pl-[50px] flex flex-col max-lg:p-4 w-full max-w-screen-2xl h-full max-lg:justify-center max-lg:items-center'>
            <div className='flex flex-col space-y-2 max-lg:text-center my-auto'>
                <h1 className='tw-fonte-titulo text-white'>
                    <span>A </span>
                    <span className='tw-destquebyd'>Netlux Solar </span>
                    <span>é a única parceira BYD no Piauí</span>
                </h1>
                <div className='tw-fonte-texto text-white'>
                    <p>
                        A BYD, maior empresa de elétricos do mundo,
                        firmou parceria com a Netlux Solar, trazendo 
                        inovação e tecnologia para nosso estado.
                    </p>
                </div>
            </div>
            <img src={LogoBYD} className='h-[501px] w-[498px] max-lg:pl-12 max-sm:pl-6'/>
        </div>
        
        <div className='lg:grid lg:grid-cols-2 pb-[160px] lg:gap-1 xl:pl-[75px] lg:pl-[50px] flex-col max-lg:space-y-10 p-4 w-full max-w-screen-2xl h-full'>
            <div className='w-[450px]'>
                <MolduraPPP/>
            </div>
            <div className='flex flex-col space-y-2 max-lg:text-center lg:-ml-10 w-full'>
                <h1 className='tw-fonte-titulo text-white'>
                    <span>A </span>
                    <span className='tw-destquebyd'>Netlux Solar </span>
                    <span>em Parceria Público Privada - PPP</span>
                </h1>
                <div className='tw-fonte-texto text-white md:w-[550px]'>
                    <p>
                        Em conjunto com o governo do estado do Piauí, a Netlux Solar foi responsável pela instalação do sistema de geração distribuída que a potencia de 8,3MWp, utilizando o sistema de seguidor solar tracker's.
                    </p>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Obras