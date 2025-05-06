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
      <h1 className="text-4xl font-semibold font-roboto">&lt; João /&gt;</h1>
      <div className="flex gap-6 text-lg">
        <Link
          href="#sobre"
          scroll={false}
          className="font-inter relative inline-block  text-black dark:text-white
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:h-[2px] after:w-0 after:bg-blue-500 
             after:transition-all after:duration-300 
             hover:after:w-full"
        >
          Sobre
        </Link>
        <Link
          href="#skills"
          scroll={false}
          className="relative inline-block font-inter text-black dark:text-white
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:h-[2px] after:w-0 after:bg-blue-500 
             after:transition-all after:duration-300 
             hover:after:w-full"
        >
          Habilidades
        </Link>
        <Link
          href="#projetos"
          scroll={false}
          className="relative inline-block font-inter text-black dark:text-white
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:h-[2px] after:w-0 after:bg-blue-500 
             after:transition-all after:duration-300 
             hover:after:w-full"
        >
          Projetos
        </Link>
        <Link
          href="#contato"
          scroll={false}
          className="relative inline-block font-inter text-black dark:text-white
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:h-[2px] after:w-0 after:bg-blue-500 
             after:transition-all after:duration-300 
             hover:after:w-full"
        >
          Contato
        </Link>
        <ModeToggle />
      </div>
    </motion.nav>
  )
}
