import Image from "next/image";
import { Header } from "./components/header"
import { O_Estudio } from "./components/o_estudio"
import { Quem_Somos } from "./components/quem_somos"
import { Agenda } from "./components/agenda"
import { MaisSobreNos } from "./components/mais_sobre_nos"
import { Contatos } from "./components/contatos"
import { Footer } from "./components/footer"
import { NavBar } from "./components/nav_bar";





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center align-middle text-center justify-between p-3 ">

      <Header />

      <div className="text-center grid-rows-5 justify-center items-center align-middle mt-5 mb-5 lg:mb-0">

        <div 
          id="#id_estudio"
          className="mt-5 mb-5 pb-2 lg:mb-0 align-middle text-center grid-rows-5 border-b border-menu-foreground">
          <O_Estudio />
        </div>
        
        
        <div 
          id="#id_quemsomos"
          className="mt-5 mb-5 pb-2 lg:mb-0 align-middle text-center grid-rows-5 border-b border-menu-foreground">
          <Quem_Somos />
        </div>

        <div 
          id="#id_maissobrenos"
          className="mt-5 mb-5 pb-2 lg:mb-0 align-middle text-center grid-rows-5 border-b border-menu-foreground">
          <MaisSobreNos />
        </div>

        <div 
          id="#id_agenda"
          className="mt-5 mb-5 pb-2 lg:mb-0 align-middle text-center grid-rows-5 border-b border-menu-foreground">
          <Agenda />
        </div>

        <div 
          id="#id_contatos"
          className="mt-5 mb-5 pb-2 lg:mb-0 align-middle text-center grid-rows-5 border-b border-menu-foreground">
          <Contatos />
        </div>
        
      </div>

      <div>
        <Footer />
      </div>

    </main>
  );
}
