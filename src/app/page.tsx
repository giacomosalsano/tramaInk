import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { NavBar } from "./components/nav_bar";





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center align-middle text-center justify-between p-3 ">
     
      <div className="z-50">
        <Header />
      </div>
      <div>
        <Footer />
      </div>

    </main>
  );
}
