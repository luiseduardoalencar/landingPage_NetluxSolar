
import React from 'react'
import Missao from '/src/assets/images/missao.png'
import VideoInst from '/src/assets/videos/videoinst.mp4'
import Banner from '../auxiliary/banner.jsx'
import ComotTrab from '/src/assets/images/ComoTrabalhamos.png'
import Dim from '/src/assets/images/dim.png'
import Acessoria from '/src/assets/images/acessoria.png'
import Inst from '/src/assets/images/inst.png'
import Monit from '/src/assets/images/monit.png'


const SobreNos = () => {
  return (
   
    <section className='w-full h-fit bg-[#DCDEE2]'>
       
        <div name='SOBRE NÓS' className='lg:grid lg:grid-cols-2 lg:gap-10 xl:pl-[75px] lg:pl-[50px] flex-col max-lg:space-y-10 p-4 w-full max-w-screen-2xl h-full'>
            
            <div className='flex flex-col space-y-2'>
                <h1 className='tw-fonte-titulo text-black max-lg:text-center'>
                    <p>Conheça um pouco da nossa história </p>
                </h1>
                <p className='text-black tw-fonte-texto max-lg:text-center'> 
                    A Netlux Solar é uma empresa subsidiária do grupo Netlux  especializada em implantação de sistemas de geração de  energia Solar. Oferecemos soluções completas, para que  nossos clientes possam gerar sua própria energia e reduzir os seus custos, e assim, investir em outros sonhos.
                </p>
            </div>
            
            <video className="w-full tw-formato-video md:w-[490px] md:h-[270px] m-auto h-full max-lg:w-6/7" controls>
                <source src={VideoInst} type="video/mp4"/>
            </video>
        </div>
        
        <div className='flex flex-col xl:pl-[75px] lg:pl-[50px] pt-[20px] p-4 max-lg:w-full items-center lg:items-start w-full'>
            <h1 className='text-black tw-fonte-titulo '>
                Nossa missão
            </h1>            
            <div className='flex flex-row lg:items-start max-lg:items-center'>
                <div className='max-lg:hidden'>
                    <img src={Missao} alt="image" className=' h-[110px] md:w-[200px] w-full'/>
                </div>
                <p className='text-black tw-fonte-texto max-lg:text-center md:w-[450px] w-full'> 
                    Fornecer serviços e soluções integradas com o mais alto padrão
                    de qualidade, visando atender e superar as expectativas dos
                    clientes e sociedade.
                </p>       
            </div>     
        </div>
        
        <div className='flex flex-col xl:pl-[75px] lg:pl-[50px] pt-[50px] p-4 max-md:w-full max-lg:text-center'>
            <h1 className='text-black tw-fonte-titulo'>
                Como trabalhamos
            </h1>
            <div className='flex flex-row items-center justify-center pt-[20px] max-lg:flex-col space-y-2 '>
                <img src={ComotTrab} className='max-lg:hidden'/>
                <div className='lg:hidden max-lg:w-2/3'>
                    <img src={Dim}/>
                    <p className='text-black tw-fonte-texto text-center'>1º Dimensionamento</p>
                </div>
                <div className='lg:hidden max-lg:w-2/3'>
                    <img src={Acessoria}/>
                    <p className='text-black tw-fonte-texto text-center'>2º Assessoria</p>
                </div>
                <div className='lg:hidden max-lg:w-2/3'>
                    <img src={Inst}/>
                    <p className='text-black tw-fonte-texto text-center'>3º Instalação</p>
                </div>
                <div className='lg:hidden max-lg:w-2/3'>
                    <img src={Monit}/>
                    <p className='text-black tw-fonte-texto text-center'>4º Monitoramento</p>
                </div>
            </div>
        </div>
        
        <div className='pt-[80px] w-full pb-[80px]'>
            <Banner/>
        </div>
        
    </section>
    
  )
}

export default SobreNos