import { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            const sections = document.querySelectorAll("section");
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 250) {
                    current = section.getAttribute("id");
                }
            });

            if (current !== "") {
                setActiveSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuClick = () => setMenuActive(!menuActive);
    const closeMenu = () => setMenuActive(false);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
            <div className="nav-container">
                <a href="#home" className="logo" onClick={closeMenu}>Thenul<span>.</span></a>
                <ul className={`nav-links ${menuActive ? "active" : ""}`}>
                    <li>
                        <a href="#home" className={activeSection === "home" ? "active" : ""} onClick={closeMenu}>Home</a>
                    </li>
                    <li>
                        <a href="#about" className={activeSection === "about" ? "active" : ""} onClick={closeMenu}>About</a>
                    </li>
                    <li>
                        <a href="#skills" className={activeSection === "skills" ? "active" : ""} onClick={closeMenu}>Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={closeMenu}>Projects</a>
                    </li>
                    <li>
                        <a href="#achievements" className={activeSection === "achievements" ? "active" : ""} onClick={closeMenu}>Achievements</a>
                    </li>
                    <li>
                        <a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
                <div className={`hamburger ${menuActive ? "active" : ""}`} onClick={handleMenuClick}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
