import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { NavBar } from "./components/nav_bar";





export default function Home() {
  return (
    <main className="min-h-screen"> 
     <div className="">
      <header>
        <Header />
      </header>
      <NavBar />
     </div>
     <footer>
        <Footer />
     </footer>
     
     
     
     
     
      
    
    </main>
    
  );
}
