"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white dark:bg-black shadow-md p-4 flex justify-between items-center"
    >
      <h1 className="text-2xl font-bold">&lt; João /&gt;</h1>
      <div className="flex gap-6 text-lg">
        <Link href="#sobre" scroll={false}>
          Sobre
        </Link>
        <Link href="#skills" scroll={false}>
          Habilidades
        </Link>
        <Link href="#projetos" scroll={false}>
          Projetos
        </Link>
        <Link href="#contato" scroll={false}>
          Contato
        </Link>
        <ModeToggle />
      </div>
    </motion.nav>
  )
}
