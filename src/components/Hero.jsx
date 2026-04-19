const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="container hero-content">
                <div className="hero-text reveal-up active">
                    <span className="greeting">Hello, I am</span>
                    <h1 className="name">Thenul Damdika</h1>
                    <h2 className="role">Undergraduate Game Developer <br/>& UI/UX Designer</h2>
                    <p className="description">
                        Bridging the gap between code and design to create
                        immersive gaming experiences and stunning user interfaces.
                    </p>
                    <div className="hero-btns">
                        <a href="#contact" className="btn btn-primary">Hire Me</a>
                        <a href="#projects" className="btn btn-secondary">My Work</a>
                    </div>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/thenul-damdika-580a48357" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/Thenul-Damdika/portfolio" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className="hero-image-wrapper reveal-left active" style={{ height: "auto", padding: "2rem 0" }}>
                    <div className="image-box" style={{ width: "280px", height: "280px", borderRadius: "50%", boxShadow: "var(--shadow-xl)", border: "8px solid white", margin: "0 auto" }}>
                        <img src="/profile.png" alt="Thenul Damdika" className="profile-img" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", zIndex: 2, position: "relative" }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
