import { ModeToggle } from "@/components/ModeToggle"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background">
      <div className="text-lg font-bold">João Pedro</div>
      <div className="flex items-center space-x-4">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#projects" className="hover:underline">
          Projetos
        </a>
        <a href="#contact" className="hover:underline">
          Contato
        </a>
        <ModeToggle />
      </div>
    </nav>
  )
}
