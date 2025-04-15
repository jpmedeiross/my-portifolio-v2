import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "João Pedro - FullStack Developer",
  description: "Portfólio pessoal com projetos e informações sobre mim"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
