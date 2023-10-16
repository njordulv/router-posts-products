import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <nav>
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="about">About Us</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <NavLink to="posts">Posts</NavLink>
      <NavLink to="cars">Shop</NavLink>
    </nav>
  )
}

export default Menu
