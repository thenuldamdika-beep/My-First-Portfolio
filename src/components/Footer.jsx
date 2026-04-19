const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <a href="#home" className="footer-logo">Thenul<span>.</span></a>
                    <div className="footer-social">
                        <a href="https://www.linkedin.com/in/thenul-damdika-580a48357" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/Thenul-Damdika/portfolio" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="mailto:thenuldamdika@gmail.com">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Thenul Damdika. Built with <i className="fas fa-heart" style={{ color: '#ff4757' }}></i> and React</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
