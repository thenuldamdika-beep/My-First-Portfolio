import { useState, useEffect, useRef } from "react";

const Comments = () => {
    const sectionRef = useRef(null);
    const [comments, setComments] = useState([]);
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [posting, setPosting] = useState(false);
    const [status, setStatus] = useState({ message: "", show: false });

    // Load initial comments from localStorage
    useEffect(() => {
        const stored = localStorage.getItem('portfolio_comments');
        if (stored) {
            setComments(JSON.parse(stored));
        }

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !text.trim()) return;

        setPosting(true);
        setTimeout(() => {
            const newComment = {
                name: name.trim(),
                comment: text.trim(),
                created_at: new Date().toISOString()
            };

            const updatedComments = [newComment, ...comments];
            setComments(updatedComments);
            localStorage.setItem("portfolio_comments", JSON.stringify(updatedComments));

            setPosting(false);
            setName("");
            setText("");
            setStatus({ message: "Comment posted successfully!", show: true });

            setTimeout(() => {
                setStatus({ message: "", show: false });
            }, 3000);
        }, 600);
    };

    return (
        <section id="comments" className="comments section" ref={sectionRef}>
            <div className="container">
                <div className="section-title reveal-up">
                    <h2>Guestbook <span>Comments</span></h2>
                    <div className="underline"></div>
                </div>
                
                <div className="contact-wrapper" style={{ alignItems: "flex-start" }}>
                    <div className="contact-form-container reveal-left" style={{ flex: 1, padding: "2rem" }}>
                        <form id="comment-form" className="contact-form" onSubmit={handleSubmit}>
                            <h3 style={{ marginBottom: "1.5rem" }}>Leave a Comment</h3>
                            <div className="input-box">
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    required 
                                    className="full-width" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="input-box" style={{ marginBottom: "1rem" }}>
                                <textarea  
                                    rows="4" 
                                    placeholder="Share your thoughts..." 
                                    required 
                                    className="full-width"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn" disabled={posting}>
                                {posting ? (
                                    <>Posting... <i className="fas fa-spinner fa-spin"></i></>
                                ) : (
                                    <>Post Comment <i className="fas fa-paper-plane"></i></>
                                )}
                            </button>
                            {status.show && (
                                <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#10b981", display: "block" }}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="comments-display-container reveal-right" style={{ flex: 1, background: "var(--card-bg)", padding: "2rem", borderRadius: "15px", boxShadow: "var(--shadow-md)", border: "1px solid rgba(255,255,255,0.05)", minHeight: "400px", display: "flex", flexDirection: "column" }}>
                        <h3 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>Recent Comments</h3>
                        <div id="comments-list" style={{ display: "flex", flexDirection: "column", gap: "1rem", overflowY: "auto", maxHeight: "400px", paddingRight: "0.5rem", flex: 1 }}>
                            {comments.length === 0 ? (
                                <p style={{ color: "var(--text-muted)", fontStyle: "italic" }}>No comments yet. Be the first to leave one!</p>
                            ) : (
                                comments.map((c, index) => (
                                    <div key={index} style={{ background: "var(--bg-alt)", padding: "1rem", borderRadius: "8px", borderLeft: "3px solid var(--primary-color)" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                                            <strong style={{ color: "var(--text-main)" }}><i className="fas fa-user-circle" style={{ color: "var(--text-muted)", marginRight: "5px" }}></i> {c.name}</strong>
                                            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{new Date(c.created_at).toLocaleDateString()}</span>
                                        </div>
                                        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", margin: 0, lineHeight: 1.4 }}>{c.comment}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comments;
