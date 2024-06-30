import Image from "next/image";


type ProdutosType = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageURL: string | undefined ;
  insta: string;
  info: string;
  telefone: string;
  email: string;
  colorOptions?: boolean;
  color1?: string;
  color2?: string;
  color3?: string;
  multiplePics?: boolean;
}
interface ProdutoProps {
  produtos: ProdutosType []
}

const produtos = [
  {
    id: 1,
    name: "Camiseta Exemplo 1",
    price: "35",
    description: "petite description lorem ipsum dolor sit amet con el desc et",
    imageURL: "/mockup.jpg",
    insta: "tramaink",
    info: "Camiseta amarela - Free t-shirt Mockup",
    telefone: "+55 11 99999-9999",
    email: " teste@hotmail.com ",
    colorOptions: false,
    multiplePics: false,
  },
  {
    id: 2,
    name: "Camiseta Branca",
    price: "75",
    description: "petite description lorem ipsum dolor sit amet con el desc et",
    imageURL: "/mockup2.jpg",
    insta: "sant2v",
    info: "lorem ipsum dolor sit amet con el desc",
    telefone: "+55 11 949433659",
    email: " teste@hotmail.com ",
    colorOptions: true,
    multiplePics: true,
  },
  {
    id: 3,
    name: "Boné Duende Atomic Thrash",
    price: "130",
    description: "petite description lorem ipsum dolor sit amet con el desc et",
    imageURL: "/bone1.jpg" && "/bone2.jpg",
    insta: "scavazinitattoo",
    info: "PRÉ VENDA ATÉ DIA 15 DE JANEIRO - O valor na pré venda é de 100R$ até a data limite. Somente 10 peças limitadas disponiveis, não vai rolar o mesmo modelo de novo",
    telefone: "+55 11 99999-9999",
    email: " teste@hotmail.com ",
    colorOptions: false,
    multiplePics: true,
  },
  {
    id: 4,
    name: "Stickers Atomic Thrash",
    price: "30",
    description: "Stickers impresso pelos brabos @stickeriasantista",
    imageURL: "/adesivos.jpg" && "/adesivos2.jpg",
    insta: "scavazinitattoo",
    info: "Unidades limitadas - 6 stickers por embalagem",
    telefone: "+55 11 99999-9999",
    email: " teste@hotmail.com ",
    colorOptions: false,
    multiplePics: true,
  },
]

export function Lojinha () {

  return (
    <div>
      <div>
        <h2 className="text-center text-3xl font-semibold font-Bungee">
            Lojinha
        </h2>
        <p className="font-Bungee font-medium text-text-secondary mb-3 text-center">
          Conheça nossa lojinha:
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {produtos.map((produto =>(
        <div key={produto.id} className="m-2 border-2 border-green-500 w-fit">
          <form className="border-2 border-yellow-500">
            <Image 
              className="rounded-md"
              src={produto.imageURL}
              alt={produto.name} 
              height={300}
              width={300}/> 
                <fieldset className="border-2 border-purple-500">
                  <h3 className="font-Bungee font-medium text-md">{produto.name}</h3>
                  <h3 className="font-Bungee text-sm text-text-secondary">R${produto.price}</h3>
                    <legend className="sr-only">Choose a color</legend>
                    <div className="forced-color-adjust-none border-2 border-orange-300">
                      <label className="border-2 border-red-500">
                        <input className="border-2 border-blue-500" type="radio" name="color-choice" value="White" />
                          <span className="sr-only border-2 border-green-900">White</span>
                          <span className="size-6 rounded-full border border-black border-opacity-10 bg-white"></span>
                      </label>
                      <label className="border-2 border-green-500">
                        <input className="border-2 border-blue-500" type="radio" name="color-choice" value="White" />
                          <span className="sr-only border-2 border-green-900">White</span>
                          <span className="size-6 rounded-full border border-black border-opacity-10 bg-white"></span>
                      </label>
                      <label className="border-2 border-blue-700">
                        <input className="border-2 border-blue-500" type="radio" name="color-choice" value="White" />
                          <span className="sr-only border-2 border-green-900">White</span>
                          <span className="size-6 rounded-full border border-black border-opacity-10 bg-white"></span>
                      </label>
                    </div>
                  </fieldset>
          </form>
        </div>
      )))}
      </div>
    </div>
  )
}