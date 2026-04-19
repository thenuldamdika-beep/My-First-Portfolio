import { useEffect, useRef } from 'react';

const Projects = () => {
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
        <section id="projects" className="projects section" ref={sectionRef}>
            <div className="container">
                <div className="section-title reveal-up">
                    <h2>My <span>Projects</span></h2>
                    <div className="underline"></div>
                </div>
                <p className="section-subtitle reveal-up">A selection of my professional design and development work.</p>

                <div className="projects-grid">
                    {/* Artisanal Coffee Shop Landing Page */}
                    <div className="project-card reveal-up">
                        <div className="project-img-wrapper">
                            <img src="/thenul ui design.png" alt="Artisanal Coffee Shop Landing Page" className="project-img" />
                            <div className="project-overlay">
                                <a href="/coffee-shop-project.html" className="view-project-btn" title="View Project Case Study">
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">Artisanal Coffee Landing Page</h3>
                            <p className="project-desc">I designed a highly creative, aesthetic landing page UI perfectly tailored for a premium coffee shop. This project features a warm mocha color palette, modern typography, and an inviting user experience.</p>
                            <ul className="project-tech">
                                <li><i className="fab fa-figma" style={{ color: '#F24E1E' }}></i> UI Design</li>
                                <li><i className="fas fa-paint-brush" style={{ color: 'var(--primary-color)' }}></i> Branding</li>
                                <li><i className="fas fa-mobile-alt" style={{ color: 'var(--secondary-color)' }}></i> Responsive UI</li>
                                <li><i className="fas fa-font" style={{ color: '#d97706' }}></i> Typography</li>
                            </ul>
                            <a href="/coffee-shop-project.html" className="btn btn-secondary" style={{ marginTop: '1.5rem', padding: '0.6rem 1.2rem', fontSize: '0.9rem', alignSelf: 'flex-start' }}>
                                View Case Study <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
