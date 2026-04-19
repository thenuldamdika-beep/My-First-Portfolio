import { useEffect, useRef } from 'react';

const Skills = () => {
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
        <section id="skills" className="skills section" ref={sectionRef}>
            <div className="container">
                <div className="section-title reveal-up">
                    <h2>My <span>Skills</span></h2>
                    <div className="underline"></div>
                </div>
                <p className="section-subtitle reveal-up">Here are the technologies and tools I work with to bring ideas to life.</p>

                <div className="skills-grid">
                    {/* Skill Category 0 */}
                    <div className="skill-card reveal-up" style={{ transitionDelay: '0.1s' }}>
                        <div className="card-header">
                            <div className="skill-icon"><i className="fas fa-laptop-code"></i></div>
                            <h3>Programming Languages</h3>
                        </div>
                        <ul className="skill-list">
                            <li>
                                <span className="skill-name"><i className="fab fa-java"></i> Java</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '70%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name"><i className="fab fa-python"></i> Python</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '60%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name"><i className="fas fa-code"></i> C</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '80%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name"><i className="fab fa-js"></i> JavaScript</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '75%' }}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Skill Category 1 */}
                    <div className="skill-card reveal-up" style={{ transitionDelay: '0.1s' }}>
                        <div className="card-header">
                            <div className="skill-icon"><i className="fas fa-laptop-code"></i></div>
                            <h3>Web & UI/UX Design</h3>
                        </div>
                        <ul className="skill-list">
                            <li>
                                <span className="skill-name"><i className="fab fa-figma"></i> Figma UI Design</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '85%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name"><i className="fab fa-html5"></i> HTML</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '90%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name"><i className="fab fa-css3-alt"></i> CSS</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '80%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name"><i className="fab fa-js"></i> JavaScript</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '75%' }}></div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Skill Category 2 */}
                    <div className="skill-card reveal-up" style={{ transitionDelay: '0.2s' }}>
                        <div className="card-header">
                            <div className="skill-icon"><i className="fas fa-paint-brush"></i></div>
                            <h3>Graphic Design</h3>
                        </div>
                        <ul className="skill-list">
                            <li>
                                <span className="skill-name"><i className="fas fa-image"></i> Adobe Photoshop</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '85%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name"><i className="fas fa-vector-square"></i> Vector Graphics</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '70%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name"><i className="fas fa-layer-group"></i> Layout Design</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '80%' }}></div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Skill Category 3 */}
                    <div className="skill-card reveal-up" style={{ transitionDelay: '0.3s' }}>
                        <div className="card-header">
                            <div className="skill-icon"><i className="fas fa-video"></i></div>
                            <h3>Video Editing</h3>
                        </div>
                        <ul className="skill-list">
                            <li>
                                <span className="skill-name"><i className="fas fa-film"></i> Adobe Premiere Pro</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '80%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name"><i className="fas fa-magic"></i> After Effects</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '75%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name"><i className="fas fa-music"></i> Audio Syncing</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '85%' }}></div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Skill Category 4 */}
                    <div className="skill-card reveal-up" style={{ transitionDelay: '0.4s' }}>
                        <div className="card-header">
                            <div className="skill-icon"><i className="fas fa-database"></i></div>
                            <h3>Database Management</h3>
                        </div>
                        <ul className="skill-list">
                            <li>
                                <span className="skill-name"><i className="fas fa-database"></i> MySQL</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '75%' }}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
