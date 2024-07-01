import Image from "next/image";
import { Tooltip } from "@material-tailwind/react";


type ProdutosType = {
  id: number;
  name: string;
  price: number;
  description: string;
  multiplePics?: boolean;
  imageURL1?: string | undefined ;
  imageURL2?: string | undefined;
  imageURL3?: string | undefined;
  insta: string;
  extraInfo: string;
  telefone: string;
  email: string;
  colorOptions?: boolean;
  color1?: string;
  color2?: string;
  color3?: string;
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
    multiplePics: false,
    imageURL1: "/mockup.jpg",
    imageURL2: null,
    imageURL3: null,
    insta: "tramaink",
    extraInfo: "Camiseta amarela - Free t-shirt Mockup",
    telefone: "+55 11 99999-9999",
    email: "teste@hotmail.com",
    colorOptions: false,
    color1: null,
    color2: null,
    color3: null,
  },
  {
    id: 2,
    name: "Camiseta Branca",
    price: "75",
    description: "petite description lorem ipsum dolor sit amet con el desc et",
    multiplePics: true,
    imageURL1: "/mockup2.jpg",
    imageURL2: "/mockup3.jpg",
    imageURL3: null,
    insta: "tramaink",
    extraInfo: "lorem ipsum dolor sit amet con el desc",
    telefone: "+55 11 99999-9999",
    email: "teste@hotmail.com",
    colorOptions: true,
    color1: "White",
    color2: "Black",
    color3: null,
  },
  {
    id: 3,
    name: "Boné Duende Atomic Thrash",
    price: "130",
    description: "petite description lorem ipsum dolor sit amet con el desc et",
    multiplePics: true,
    imageURL1: "/bone1.jpg",
    imageURL2: "/bone2.jpg",
    imageURL3: null,
    insta: "atomicthrash",
    extraInfo: "PRÉ VENDA ATÉ DIA 15 DE JANEIRO - O valor na pré venda é de 100R$ até a data limite. Somente 10 peças limitadas disponiveis, não vai rolar o mesmo modelo de novo",
    telefone: "+55 11 99999-9999",
    email: "teste@hotmail.com",
    colorOptions: false,
    color1: null,
    color2: null,
    color3: null,
  },
  {
    id: 4,
    name: "Stickers Atomic Thrash",
    price: "30",
    description: "Stickers impresso pelos brabos @stickeriasantista",
    multiplePics: true,
    imageURL1: "/adesivos2.jpg",
    imageURL2: "/adesivos.jpg",
    imageURL3: null,
    insta: "atomicthrash",
    extraInfo: "Unidades limitadas - 6 stickers por embalagem",
    telefone: "+55 11 99999-9999",
    email: "teste@hotmail.com",
    colorOptions: false,
    color1: null,
    color2: null,
    color3: null,
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
                src={produto.imageURL1}
                alt={produto.name} 
                height={300}
                width={300}/> 
              <div className="border-2 border-purple-500">
                <h3 className="font-Bungee font-medium text-md">{produto.name}</h3>
                <h3 className="font-Bungee text-sm text-text-secondary">R${produto.price}</h3>
                  <div className="forced-color-adjust-none border-2 border-orange-300">

                    {produto.color1  ? 
                      <Tooltip content={produto.color1} className="bg-text-secondary font-Bungee text-sm">
                        <label className="m-1">
                          <input className="size-4 rounded-full" type="radio" name={produto.color1} value={produto.color1} color={produto.color1} />
                        </label>
                      </Tooltip>
                    : '' }

                    {produto.color2  ? 
                      <Tooltip content={produto.color2} className="bg-text-secondary font-Bungee text-sm">
                        <label className="m-1">
                          <input  className="size-4 rounded-full" type="radio" name={produto.color2} value={produto.color2} color={produto.color2} />
                          <span className="size-6 rounded-full"></span>
                        </label>
                        
                      </Tooltip>
                    : '' }

                    {produto.color3  ?
                      <Tooltip content={produto.color3} className="bg-text-secondary font-Bungee text-sm">
                        <label className="m-1">
                          <input className="size-4 rounded-full" type="radio" name={produto.color3} value={produto.color3} color={produto.color3} />
                          <span className="size-6 rounded-full"></span>
                        </label>
                      </Tooltip>
                    : '' }
                    
                  </div>
              </div>
            </form>
          </div>
        )))}
      </div>
    </div>
  )
}