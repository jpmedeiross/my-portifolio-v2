import { Link } from "lucide-react"

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">João Pedro - FullStack Developer</Link>
      </div>
      <a href="" className="cta-btn">
        Resumo
      </a>
    </div>
  )
}

export default Navbar
