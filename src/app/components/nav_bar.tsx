export function NavBar () {
  return (
    <div className="fixed z-10 top-5 left-0 right-0 border-text-tertiary bg-primary flex w-full justify-center border-b pb-3 mt-20 
    border-b-menu-foreground space-x-6">
      <a 
      href="#id_estudio"
      className="font-Bungee text-sm text-text-secondary hover:drop-shadow-[0_0_0.3rem_#7c7c7c80]">O Estúdio</a>

      <a href="#id_quemsomos"
      className="font-Bungee text-sm text-text-secondary hover:drop-shadow-[0_0_0.3rem_#7c7c7c80]">Quem Somos?</a>

      <a href="#id_agenda"
      className="font-Bungee text-sm text-text-secondary hover:drop-shadow-[0_0_0.3rem_#7c7c7c80]">Agenda</a>
      
      <a href="#id_maissobrenos"
      className="font-Bungee text-sm text-text-secondary hover:drop-shadow-[0_0_0.3rem_#7c7c7c80]">Mais Sobre Nós</a>

      <a href="#id_contatos"
      className="font-Bungee text-sm text-text-secondary hover:drop-shadow-[0_0_0.3rem_#7c7c7c80]">Contatos</a>
    </div>
    
  )
}