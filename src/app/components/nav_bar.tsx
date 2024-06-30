"use client";

import { useState } from "react"
import { tv } from 'tailwind-variants'
import { O_Estudio } from "./o_estudio";
import { Quem_Somos } from "./quem_somos";
import { Projetos } from "./projetos";
import { Agenda } from "./agenda";
import { Contatos } from "./contatos";
import { Lojinha } from "./lojinha";



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
  },
  {
    title: {name: "Lojinha"},
    content: <Lojinha />,
  },
]



export function NavBar () {
    const [activeTab, setActiveTab] = useState<number>(1)

    const selectedTab = tabs.map((tab, index) => {
      return {
        ...tab,
        id: index + 1,
      }
    })
  return (
        <div className="">
          <div className="sticky top-[93.7px] border-b border-b-menu-foreground bg-primary space-x-2 text-xs md:space-x-5 text-center mb-24">
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
