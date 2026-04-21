import { useState, useEffect, useRef } from "react";

const Achievements = () => {
    const sectionRef = useRef(null);
    const [activeCert, setActiveCert] = useState(`${import.meta.env.BASE_URL}Screenshot 2026-03-12 204103.png`);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            const elements = sectionRef.current.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
            elements.forEach(el => observer.observe(el));
        }
        return () => observer.disconnect();
    }, []);

    const handleThumbClick = (src) => {
        setActiveCert(src);
    };

    const handleEscape = (e) => {
        if (e.key === "Escape") setLightboxOpen(false);
    };

    useEffect(() => {
        if (lightboxOpen) {
            document.addEventListener("keydown", handleEscape);
        } else {
            document.removeEventListener("keydown", handleEscape);
        }
        return () => document.removeEventListener("keydown", handleEscape);
    }, [lightboxOpen]);

    const certThumbs = [
        `${import.meta.env.BASE_URL}Screenshot 2026-03-12 204103.png`,
        `${import.meta.env.BASE_URL}Screenshot 2026-03-14 133856.png`,
        `${import.meta.env.BASE_URL}Screenshot 2026-03-14 133838.png`,
        `${import.meta.env.BASE_URL}Screenshot 2026-03-12 204121.png`,
        `${import.meta.env.BASE_URL}Screenshot 2026-03-12 204149.png`
    ];

    return (
        <section id="achievements" className="achievements section bg-alt" ref={sectionRef}>
            <div className="container">
                <div className="section-title reveal-up">
                    <h2>My <span>Achievements</span></h2>
                    <div className="underline"></div>
                </div>

                <div className="achievement-timeline">
                    <div className="timeline-item reveal-left">
                        <div className="timeline-icon">
                            <i className="fab fa-aws"></i>
                        </div>
                        <div className="timeline-content">
                            <span className="date">Completed</span>
                            <h3>AWS Courses & Certificates</h3>
                            <p>Successfully completed Amazon Web Services (AWS) training courses, building a strong foundation in cloud computing infrastructure and services.</p>
                            <div className="pdf-gallery" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                                <a href={`${import.meta.env.BASE_URL}AWS.pdf`} target="_blank" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                    <i className="fas fa-file-pdf" style={{ color: '#ff4757' }}></i> View AWS Certificate
                                </a>
                                <a href={`${import.meta.env.BASE_URL}aws well-architected.pdf`} target="_blank" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                    <i className="fas fa-file-pdf" style={{ color: '#ff4757' }}></i> View Well-Architected
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item reveal-right">
                        <div className="timeline-icon">
                            <i className="fab fa-windows"></i>
                        </div>
                        <div className="timeline-content">
                            <span className="date">Completed</span>
                            <h3>Microsoft Courses & Certificates</h3>
                            <p>Earned official certifications through Microsoft's comprehensive courses, demonstrating expertise and continuous learning in modern technologies.</p>
                            <div className="featured-certificate-gallery">
                                <div className="featured-cert-container" id="featured-cert-container" onClick={() => setLightboxOpen(true)}>
                                    <img id="featured-cert" src={activeCert} alt="Featured Certificate" className="featured-cert-img" />
                                    <div className="featured-cert-overlay"><i className="fas fa-expand"></i></div>
                                </div>
                                <div className="cert-thumbnails">
                                    {certThumbs.map((src, index) => (
                                        <img 
                                            key={index} 
                                            src={src} 
                                            alt={`DevOps Certificate ${index + 1}`} 
                                            className={`cert-thumb ${activeCert === src ? "active" : ""}`} 
                                            onClick={() => handleThumbClick(src)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox for Certificates */}
            {lightboxOpen && (
                <div id="certLightbox" className="lightbox" style={{ display: "flex" }} onClick={(e) => {
                    if (e.target.id === "certLightbox") setLightboxOpen(false);
                }}>
                    <span className="close-lightbox" id="closeLightbox" onClick={() => setLightboxOpen(false)}>&times;</span>
                    <img className="lightbox-content" id="lightboxImg" src={activeCert} alt="Lightbox Content" />
                </div>
            )}
        </section>
    );
};

export default Achievements;
