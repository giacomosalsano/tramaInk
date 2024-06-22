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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Header />
      <NavBar />

      <div className="mt-5 mb-5 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

        <div id="#id_estudio">
          <O_Estudio />
        </div>
        
        <div id="#id_quemsomos">
          <Quem_Somos />
        </div>

        <div id="#id_agenda">
          <Agenda />
        </div>

        <div id="#id_maissobrenos">
          <MaisSobreNos />
        </div>

        <div id="#id_contatos">
          <Contatos />
        </div>
        
      </div>

      <div>
        <Footer />
      </div>

    </main>
  );
}
