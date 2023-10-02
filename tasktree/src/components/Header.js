import Logo from "../assets/FullLogo_Transparent_NoBuffer.png"
import "../components/Header.css"


export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" />
      <a href="/">Home</a>
    </header>
  )
}
