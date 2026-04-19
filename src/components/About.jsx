import { useEffect, useRef } from 'react';

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const elements = sectionRef.current.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about section bg-alt" ref={sectionRef}>
            <div className="container">
                <div className="section-title reveal-up">
                    <h2>About <span>Me</span></h2>
                    <div className="underline"></div>
                </div>
                <div className="about-content">
                    <div className="about-image-wrapper reveal-left">
                        <div className="image-box side-image">
                            <img src="/about-profile.png" alt="Thenul Damdika" className="profile-img" />
                        </div>
                    </div>
                    <div className="about-text reveal-right">
                        <h3 className="about-subtitle">Software Engineering Student</h3>
                        <p>I am an undergraduate Software Engineering student at the <strong>University of
                                Kelaniya</strong>. I have a profound interest in game development and designing intuitive
                            user interfaces (UI) and user experiences (UX).</p>
                        <p>My approach combines technical knowledge with creative design principles, allowing me to build
                            robust applications that also look fantastic. I am constantly learning new tools and paradigms
                            to refine my craft.</p>
                        <div className="about-details">
                            <div className="detail-item">
                                <i className="fas fa-graduation-cap"></i>
                                <div>
                                    <span className="label">University</span>
                                    <span className="value">University of Kelaniya</span>
                                </div>
                            </div>
                            <div className="detail-item">
                                <i className="fas fa-code"></i>
                                <div>
                                    <span className="label">Major</span>
                                    <span className="value">Software Eng.</span>
                                </div>
                            </div>
                            <div className="detail-item">
                                <i className="fas fa-heart"></i>
                                <div>
                                    <span className="label">Interests</span>
                                    <span className="value">Game Dev, UI/UX</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem" }}>
                            <a href="/Thenul_Damdika_Resume.pdf" download="Thenul_Damdika_Resume.pdf" className="btn btn-primary">
                                <i className="fas fa-download"></i> Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
