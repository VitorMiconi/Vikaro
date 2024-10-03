import { useState } from 'react';

const HamburguerMenu = () => {
  const [open, setOpen] = useState(false); // Estado que controla se o menu está aberto ou fechado

  return (
    <>  
      {/* Botão hamburguer que alterna a abertura e fechamento do menu */}
      <button
        className="text-white focus:outline-none relative z-50 font-montserrat block lg:hidden" 
        onClick={() => setOpen(prev => !prev)}
      >
        {open ? <div className="relative w-8 h-8">
                    <span className="block h-[1px] w-8 bg-white absolute top-1/2 left-0 transform -translate-y-1/2 rotate-45"></span>
                    <span className="block h-[1px] w-8 bg-white absolute top-1/2 left-0 transform -translate-y-1/2 -rotate-45"></span>
            </div> : 
            <div className='space-y-2'>
                <span className="block h-[1px] w-8 bg-white"></span>
                <span className="block h-[1px] w-8 bg-white"></span>
                <span className="block h-[1px] w-8 bg-white"></span>
            </div>
            
} {/* Alterna entre "Abrir" e "Fechar" */}
      </button>

      {/* Menu que aparece ou desaparece com base no estado de "open" */}
      <nav className={`divide-y ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-linear absolute text-start bg-black h-screen w-screen left-0 top-0 py-16 px-6 `}>
        <a href="#projetos" className="py-6 text-white font-montserrat font-light block">
          PROJETOS
        </a>
        <a href="#servicos" className="py-6 text-white font-lemon font-montserrat block">
          SERVIÇOS
        </a>
        <a href="#sobre" className="py-6 text-white font-lemon font-montserrat block">
          SOBRE
        </a>
      </nav>
    </>
  );
};

export default HamburguerMenu;
