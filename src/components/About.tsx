"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <motion.section
      id="sobre"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen px-8 py-20 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left"
    >
      <div className="flex justify-around gap-x-40 mb-52 content-start">
        <div className="flex-1 ml-20">
          <h1 className="text-7xl mb-10 font-roboto font-bold">Hello!</h1>
          <h2 className="text-4xl font-bold mb-3 font-roboto">
            I&apos;m João,
          </h2>
          <p className="text-lg text-muted-foreground font-inter mb-5">
            Sou um desenvolvedor front-end apaixonado por criar interfaces
            modernas, responsivas e performáticas com tecnologias como React,
            Next.js e Tailwind CSS.
          </p>
          <a
            href="/Joao_Medeiros_CV_EN.pdf"
            download
            className="inline-block px-15 py-2 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Baixar currículo
          </a>
        </div>

        <motion.div
          className="flex-1 flex justify-center items-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/images/jpdev-profile.png"
              alt="Foto de João"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
