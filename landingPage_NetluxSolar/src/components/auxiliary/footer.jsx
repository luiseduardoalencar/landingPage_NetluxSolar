
import React, {useState} from 'react'
import Logo from '/src/assets/images/logo.png'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
 
    const [click, setClick] = React.useState(false);

  return (
      
    <div className='w-full h-fit'>
        
        <div className='lg:hidden'>
            <div className='flex flex-row items-center space-x-2 justify-center h-1/4'>
                <img src={Logo} alt='Logo Netlux Solar' className=' h-1/4 w-1/4'/>
                <p className='tw-fonte-texto text-white text-left m-1'>
                    Excelência e qualidade, 
                    desde o primeiro contato 
                    até o pós venda
                </p>
            </div>
            <br/>
            <div className='flex flex-row items-center justify-evenly'>
                <a onClick={()=>setClick(!click)} href='https://www.facebook.com/netluxsolar/' target='_blank' rel='noreferrer'>
                    <AiOutlineFacebook size={50} className='text-white hover:text-[#F68013] selection:text-[#F68013]'/>
                </a>
                <a onClick={()=>setClick(!click)} href='https://www.instagram.com/netluxsolar/' target='_blank' rel='noreferrer'>
                    <AiOutlineInstagram size={50} className='text-white hover:text-[#F68013] selection:text-[#F68013]'/>
                </a>
                <a onClick={()=>setClick(!click)} href='https://www.linkedin.com/company/netluxsolar/' target='_blank' rel='noreferrer'>
                    <AiOutlineLinkedin size={50} className='text-white hover:text-[#F68013] selection:text-[#F68013]'/>
                </a>
            </div>
        </div>
        
        <div className='max-lg:hidden'>
            <div className='h-1/4 flex items-center justify-center flex-row'>
                <p className='tw-fonte-texto text-white text-right m-1 w-1/4'>
                    Excelência e qualidade, 
                    desde o primeiro contato 
                    até o pós venda
                </p>
                <img src={Logo} alt='Logo Netlux Solar' className='h-1/4 w-1/4'/>
                <div className='w-1/4 flex flex-col'>
                    <p className='tw-fonte-texto text-white text-left m-1'>
                        Acesse nossas redes sociais
                    </p>
                    <div className='flex flex-row space-x-20'>
                        <a onClick={()=>setClick(!click)} href='https://www.facebook.com/netluxsolar/' target='_blank' rel='noreferrer'>
                            <AiOutlineFacebook size={50} className='text-white hover:text-[#F68013] selection:text-[#F68013]'/>
                        </a>
                        <a onClick={()=>setClick(!click)} href='https://www.instagram.com/netluxsolar/' target='_blank' rel='noreferrer'>
                            <AiOutlineInstagram size={50} className='text-white hover:text-[#F68013] selection:text-[#F68013]'/>
                        </a>
                        <a onClick={()=>setClick(!click)} href='https://www.linkedin.com/company/netluxsolar/' target='_blank' rel='noreferrer'>
                            <AiOutlineLinkedin size={50} className='text-white hover:text-[#F68013] selection:text-[#F68013]'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       
        <br/>    
        <div className='border border-white'></div>
        <br/>
        
        <div className='flex flex-col items-center justify-center max-md:text-center pb-5'>
            <p className=' text-white'>2022 Netlux Solar - Todos os direitos reservados</p>
            <p className='text-white '>Produzido por Deploy.ed</p>
        </div>
      
    </div>     
  )
    
}

export default Footer