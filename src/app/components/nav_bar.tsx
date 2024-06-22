export function NavBar () {
  return (
    <div className="border-text-tertiary bg-primary fixed align-middle gap-10 top-15 flex w-full justify-center border-b p-3 border-b-menu-foreground">
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