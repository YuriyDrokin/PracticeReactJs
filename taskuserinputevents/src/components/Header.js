import Logo from "../assets/FullLogo_Transparent.png"
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" />
      <a className="title" href="/">Home</a>
    </header>
  )
}