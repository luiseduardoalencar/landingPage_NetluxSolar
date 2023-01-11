import React,{useState} from 'react'
import {Link} from 'react-scroll'
import Navbar from '../auxiliary/navbar.jsx'

const Home = () => {
    const [click, setClick] = React.useState(false);

  return (
    <section name='INÍCIO' className="bg-[url('/Energia-Solar.png')] bg-cover bg-no-repeat h-screen w-full overflow-auto lg:h-screen flex flex-col sm:bg-center">
        <div className='flex items-center justify-center lg:mt-5 w-full'>
            <Navbar/>
        </div> 
        <div className='flex flex-col mx-auto items-center justify-center m-auto drop-shadow-md z-0 w-full max-w-screen-2xl h-full max-lg:pb-5'>
            <div className='text-center lg:text-[72px] lg:font-[700] lg:leading-[108px] tw-fonte-titulo text-white m-5'>
                <h1 className="">
                    Excelência e Qualidade
                    <br className='max-md:hidden'/>
                    <span className=""> em </span>
                    <br className='md:hidden'/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F68013] to-white">Energia Solar</span>
                </h1>
                <h1 className="">para Você</h1>
            </div>
            <div className='mt-1 max-lg:pt-14'>
                <Link to='OBRAS' onClick={()=>setClick(!click)} offset='' smooth duration={500} className="text-white hover:bg-opacity-95 font-[600] leading-[24px] text-[16px] w-[222px] h-[65px] flex items-center rounded-[30px] bg-[#F68013] bg-opacity-80 cursor-pointer text-center px-[33px] py-[20px] drop-shadow-md">
                    QUERO SABER MAIS
                </Link>
            </div>
        </div>
          
    </section>
  )
}

export default Home