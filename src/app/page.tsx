import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { NavBar } from "./components/nav_bar";





export default function Home() {
  return (
    <main className="w-screen h-screen"> 
      <Header />
      <NavBar/>
      <Footer />
    </main>
  );
}
