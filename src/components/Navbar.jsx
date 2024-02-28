import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">TW</p>
        </NavLink>
        <nav className="flex tet-lg gap-7 font-medium">
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>
            Contact
          </NavLink>

        </nav>
    </header>
  )
}

export default Navbar