import Image from "next/image";
import { Header } from "./components/header"
import { O_Estudio } from "./components/o_estudio"
import { Quem_Somos } from "./components/quem_somos"
import { Agenda } from "./components/agenda"
import { MaisSobreNos } from "./components/mais_sobre_nos"
import { Contatos } from "./components/contatos"
import { Footer } from "./components/footer"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Header />

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <O_Estudio />

        <Quem_Somos />
   
        <Agenda />

        <MaisSobreNos />

        <Contatos />
      </div>

      <div>
        <Footer />
      </div>

    </main>
  );
}
