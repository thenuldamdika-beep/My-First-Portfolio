import { useEffect, useRef, useState } from "react";

const Contact = () => {
    const sectionRef = useRef(null);
    const [fileAttached, setFileAttached] = useState(false);

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

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileAttached(true);
        } else {
            setFileAttached(false);
        }
    };

    return (
        <section id="contact" className="contact section" ref={sectionRef}>
            <div className="container">
                <div className="section-title reveal-up">
                    <h2>Contact <span>Me</span></h2>
                    <div className="underline"></div>
                </div>
                <p className="section-subtitle reveal-up">Have a project in mind or want to collaborate? Feel free to reach out!</p>

                <div className="contact-wrapper">
                    <div className="contact-cards reveal-left">
                        <a href="mailto:thenuldamdika@gmail.com" className="contact-card">
                            <div className="icon-circle"><i className="fas fa-envelope"></i></div>
                            <h4>Email</h4>
                            <p>thenuldamdika@gmail.com</p>
                        </a>

                        <a href="tel:0717720781" className="contact-card">
                            <div className="icon-circle"><i className="fas fa-phone-alt"></i></div>
                            <h4>Phone</h4>
                            <p>0717720781</p>
                        </a>

                        <a href="https://www.linkedin.com/in/thenul-damdika-580a48357" target="_blank" rel="noreferrer" className="contact-card">
                            <div className="icon-circle"><i className="fab fa-linkedin-in"></i></div>
                            <h4>LinkedIn</h4>
                            <p>thenul-damdika</p>
                        </a>

                        <a href="https://github.com/thenuldamdika-beep" target="_blank" rel="noreferrer" className="contact-card">
                            <div className="icon-circle"><i className="fab fa-github"></i></div>
                            <h4>GitHub</h4>
                            <p>thenuldamdika-beep</p>
                        </a>
                    </div>

                    <div className="contact-form-container reveal-right">
                        <form className="contact-form" action="https://formsubmit.co/30720200308e869df1f76d2dff72a8b9" method="POST" encType="multipart/form-data">
                            <h3>Send a Message</h3>
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New Submission from Portfolio!" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="input-box">
                                <input type="text" name="name" placeholder="Name" required />
                                <input type="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="input-box">
                                <input type="text" name="subject" placeholder="Subject" required className="full-width" />
                            </div>
                            <div className="input-box" style={{ marginBottom: "1rem" }}>
                                <textarea name="message" rows="5" placeholder="Tell me about your project and ideas..." required className="full-width"></textarea>
                            </div>
                            <div className="input-box" style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                                <label htmlFor="attachment" style={{ display: "block", color: "var(--text-muted)", fontSize: "0.95rem", textAlign: "left", fontWeight: "500" }}>
                                    Attach a file (Optional):
                                </label>
                                <input 
                                    type="file" 
                                    name="attachment" 
                                    accept="image/png, image/jpeg, application/pdf" 
                                    className="full-width" 
                                    style={{ padding: "0.8rem", background: "var(--bg-alt)", cursor: "pointer" }}
                                    onChange={handleFileChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn" style={{ marginTop: "0.5rem" }}>
                                Send Message <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
