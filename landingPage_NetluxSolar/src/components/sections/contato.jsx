
import React from 'react'
import BotaoEnviar from '../auxiliary/botaoenviar'
import Footer from '../auxiliary/footer'



const Contato = () => {
  return (
   
    <section className='w-full h-fit tw-background-footer max-md:pt-[50px]'>
      
        <div name='CONTATO' className='flex flex-col justify-center items-center text-center text-black pt-[20px] pb-[10px] max-w-screen-lg mx-auto h-full max-md:p-4 space-y-2 max-md:text-center'>
            <h1 className='tw-titulo-contato '>
                Quer qualidade e experiencia no seu projeto?
            </h1>
            <p className='tw-texto-contato '>
                Preencha o formulário abaixo que entraremos em contato em até 24 horas para conversarmos sobre a simulação do seu orçamento e solucionar quaisquer dúvidas sobre o seu projeto.
            </p>
        </div>
        
        <form action='https://getform.io/f/c997f056-0209-4369-91de-1796c6db3888' method='POST'>
            <div className='flex flex-col items-center justify-center max-w-screen-2xl mx-auto h-full space-y-2 p-4 pt-[50px]'>
                <div className='lg:grid lg:grid-cols-2 lg:gap-2 w-full lg:w-1/2 flex flex-col max-lg:space-y-2'>
                    <input name='Nome' type="text" placeholder='Nome e Sobrenome' class="form-input tw-campo-formulario-pd focus:outline-none" />
                    <input name='Email' type="email" placeholder='Email' class="form-input tw-campo-formulario-pd focus:outline-none" />
                    <input name='Telefone' type="tel" placeholder='Telefone' class="form-input tw-campo-formulario-pd focus:outline-none" />
                    <input name='Conta de Energia' type="text" placeholder='Qual seu gasto médio com energia ?' class="form-input tw-campo-formulario-pd focus:outline-none" />
                </div>
                <textarea name='Mensagem' type="message" rows='10' placeholder='Nos conte um pouco sobre o que você está buscando' class="form-textarea tw-campo-formulario-pd focus:outline-none w-full lg:w-1/2" />
            </div>
            <div className='pt-[2px] pb-[15px] flex flex-col max-lg:items-center max-xl:justify-center items-center xl:-translate-x-[220px] max-w-screen-2xl mx-auto h-full'>
                <BotaoEnviar/>
            </div>
        </form>
        
        <div className='p-4 pt-[150px]'>
            <Footer/>
        </div>
    </section>
   
  )
}

export default Contato