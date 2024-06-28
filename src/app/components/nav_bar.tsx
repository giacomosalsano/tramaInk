"use client";

import { useState } from "react"
import { tv } from 'tailwind-variants'
import { O_Estudio } from "./o_estudio";
import { Quem_Somos } from "./quem_somos";
import { Projetos } from "./projetos";
import { Agenda } from "./agenda";
import { Contatos } from "./contatos";



const tabButton = tv({
  base: 'font-Bungee text-sm text-text-secondary duration-75',
  variants: {
    isActive: {
      true: 'font-Bungee text-sm text-text-white',
      false:
        'font-Bungee text-sm text-text-secondary hover:text-text-tertiary',
    },
    disabled: {
      true: 'text-text-disabled cursor-not-allowed p-2 font-medium justify-center items-center hover:text-text-disabled',
      false: null,
    },
  },
})

type Title = {
  name: string
  icon?: React.ReactNode
}

type Tab = {
  title: Title
  content: React.ReactNode
  isDisabled?: boolean
}

export interface TabsProps {
  tabs: Tab[]
}

const tabs = [
  {
    title: {name: "O Estúdio", icon:""},
    content: <O_Estudio/>,
    isDisabled: false,
  },
  {
    title: {name: "Quem Somos?"},
    content: <Quem_Somos/>,
  },
  {
    title: {name: "Projetos"},
    content: <Projetos />
  },
  {
    title: {name: "Agenda"},
    content: <Agenda />,
  },
  {
    title: {name: "Contatos"},
    content: <Contatos />,
  }

]

// const NavBar: React.FC<TabsProps> = ({ tabs }) => {
//   const [activeTab, setActiveTab] = useState<number>(1)

//   const selectedTab = tabs.map((tab, index) => {
//     return {
//       ...tab,
//       id: index + 1,
//     }
//   })
//   return (
//     <div className="fixed z-10 top-5 left-0 right-0 border-text-tertiary bg-primary flex w-full justify-center border-b pb-3 mt-20 border-b-menu-foreground space-x-6">
//       <div className="flex items-center gap-2">
//         {selectedTab.map((item) => (
//           <button
//             className={tabButton({
//               isActive: item.id === activeTab,
//               disabled: item.isDisabled,
//             })}
//             key={item.id}
//             onClick={() => setActiveTab(item.id)}
//             disabled={item.isDisabled}
//           >
//             <span className="flex items-center gap-2">
//               {item.title.icon} {item.title.name}
//             </span>
//           </button>
//         ))}
//       </div>
//       <div className="mt-2 p-2 flex items-center text-justify">
//         {selectedTab.find((tab) => tab.id === activeTab)?.content}
//       </div>
//     </div>
//   )
// }


export function NavBar () {
    const [activeTab, setActiveTab] = useState<number>(1)

    const selectedTab = tabs.map((tab, index) => {
      return {
        ...tab,
        id: index + 1,
      }
    })
  return (
        <div className="fixed right-0 left-0 top-[93.7px]">
              <div className="border-b border-b-menu-foreground bg-primary space-x-2 text-xs md:space-x-3 text-center">
                {selectedTab.map((item) => (
                  <button
                    className={tabButton({
                      isActive: item.id === activeTab,
                      disabled: item.isDisabled,
                    })}
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    disabled={item.isDisabled}
                  >
                    <h3 className="">
                      {item.title.icon} {item.title.name}
                    </h3>
                  </button>
                ))}
              </div>
              <div className="p-4">
                {selectedTab.find((tab) => tab.id === activeTab)?.content}
              </div>
            </div>
          )
        }
