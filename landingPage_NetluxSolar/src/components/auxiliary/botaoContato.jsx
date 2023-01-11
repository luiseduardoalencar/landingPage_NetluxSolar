
import {BsWhatsapp} from 'react-icons/bs'
import React, {useState} from 'react'



const BotaoContato = () => {
  
  
  const [click, setClick] = React.useState(false);
  
  
  return (
    
    <a onClick={()=>setClick(!click)} href='https://api.whatsapp.com/send?phone=558688757669&text=Ol%C3%A1%2C+tenho+interesse+em+energia+solar&fbclid=PAAaZQk2mEI94JnUKUBxRfz36RG-WWaByf7ofW6VWsuQMJTdrTNhMhaJ_CatQ' 
    target='_blank' rel='noreferrer' className='tw-formato-botao-contato flex flex-row items-center cursor-pointer justify-center space-x-2 hover:bg-[#25D366] selection:bg-[#25D366]'>
          <p className='tw-texto-botao-contato text-white'>
            WhatsApp
          </p>
          <span>
            <BsWhatsapp size={42} className='ml-1 text-white'/>
          </span>
    </a>
    
  )
}

export default BotaoContato