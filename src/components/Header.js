import { useEffect, useState } from "react"
import Logo from "../assets/logo.png"

export const Header = () => {
  //const [theme, setTheme] = useState("dark");
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "medium"); // store to local storage

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme)); // update local storage
    document.documentElement.removeAttribute("class"); // <html lang="en" class=""> TO RESET CLASS
    document.documentElement.classList.add(theme); // <html lang="en" class="dark"> TO RESET ADD
  }, [theme]);

  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Tasknote Logo" />
            <span>Tasknote</span>
        </div>
        <div className="themeSelector">
            <span onClick={() => setTheme("light")} className={ theme === "light" ? "light activeTheme" : "light"}></span>
            <span onClick={() => setTheme("medium")} className={ theme === "medium" ? "medium activeTheme" : "medium"}></span>
            <span onClick={() => setTheme("dark")} className={ theme === "dark" ? "dark activeTheme" : "dark"}></span>
            <span onClick={() => setTheme("gOne")} className={ theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
            <span onClick={() => setTheme("gTwo")} className={ theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
            <span onClick={() => setTheme("gThree")} className={ theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
        </div>
    </header>
  )
}
