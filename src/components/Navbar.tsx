import { ModeToggle } from "@/components/ModeToggle"
import { Link } from "lucide-react"
import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background">
      <div className="text-lg font-bold">João.</div>
      <div className="flex items-center space-x-4">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          Sobre mim
        </a>
        <a href="#projects" className="hover:underline">
          Projetos
        </a>
        <a href="#contact" className="hover:underline">
          Contato
        </a>
        <Button
          size={"icon"}
          className="rounded-full bg-background text-balance"
        >
          <Link href="https://github.com/jpmedeiross">Teste</Link>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  )
}
