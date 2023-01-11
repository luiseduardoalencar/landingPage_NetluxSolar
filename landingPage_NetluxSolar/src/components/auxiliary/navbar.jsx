
import React, {useState} from 'react';
import {Link} from 'react-scroll';
import logo from '/src/assets/images/logo.png'
import BotaoOrcamento from './botaoOrcamento.jsx'
import {FaBars, FaTimes} from 'react-icons/fa';


const Navbar = () => {
  
  const [click, setClick] = React.useState(false);
  
  const secoes = [
    {id: 1, nome: 'INÍCIO', link: 'INÍCIO', offset: 0},
    {id: 2, nome: 'OBRAS', link: 'OBRAS', offset: 0},
    {id: 3, nome: 'SOBRE NÓS', link: 'SOBRE NÓS', offset: 0},
    {id: 4, nome: 'CONTATO', link: 'CONTATO', offset: 0},
  ];
  
  return (
    
    <div className='flex justify-center w-full'>
      
      <div className='h-[155px] flex items-center justify-center space-x-28 m-auto max-lg:hidden max-w-screen'>
        <img src={logo} alt="logo" className='w-[150px] h-[154px] drop-shadow-md' />
        <nav className='font-[600] leading-[24px] text-[16px] flex space-x-14 items-center justify-center text-white'>
            {secoes.map((secao) => (
                <p key={secao.id} className='cursor-pointer'>
                    <Link onClick={()=>setClick(!click)} to={secao.link} smooth duration={500} offset={secao.offset} className='hover:text-[#F68013]'>
                        {secao.nome}
                    </Link>
                </p>
            ))}
            <BotaoOrcamento/>
        </nav>
      </div>
      
      <div className='flex flex-col justify-center w-screen items-center lg:hidden'>
        <div className='lg:hidden flex flex-row items-center justify-between p-4 bg-[#253A85] max-h-[80px]  drop-shadow-lg'>
          <div className='flex flex-row items-center space-x-2'>
            <img src={logo} alt="logo" className='w-[8%] h-[8%] drop-shadow-sm md:p-1' />
            <h1 className=' tw-netlux-nome font-Poppins text-[#F68013] bg-clip-text text-[200%] drop-shadow-sm'>
              Netlux Solar
            </h1>
          </div>
          <div onClick={()=>setClick(!click)} className='cursor-pointer p-1 text-[#F68013] lg:hidden drop-shadow-sm'>
            {click ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
       
        {click && (
          <ul className='lg:hidden flex flex-col justify-end items-center   w-2/3 h-fit bg-white text-gray-500'>
            {secoes.map((secao) => (
                <li key={secao.id} className='px-4 cursor-pointer capitalize py-4 w-full hover:text-[#F68013] text-[#253A85] tw-fonte-texto border border-gray'>
                    <Link onClick={()=>setClick(!click)} to={secao.link} smooth duration={500} offset={secao.offset}>
                        {secao.nome}
                    </Link>
                </li>
            ))}
          </ul>
        )}
        
      </div>
     
    </div>
  )
  
}

export default Navbar