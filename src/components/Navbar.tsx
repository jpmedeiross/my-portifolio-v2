"use client"

import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black shadow-md p-4 flex justify-between items-center">
      <span className="text-2xl font-bold">&lt; João /&gt;</span>
      <div className="flex gap-6 text-lg">
        <Link href="#sobre" scroll={false}>
          Sobre
        </Link>
        <Link href="#projetos" scroll={false}>
          Projetos
        </Link>
        <Link href="#skills" scroll={false}>
          Habilidades
        </Link>
        <Link href="#contato" scroll={false}>
          Contato
        </Link>
        <ModeToggle />
      </div>
    </nav>
  )
}
