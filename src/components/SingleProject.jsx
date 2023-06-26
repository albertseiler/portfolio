
import { useInView } from "framer-motion";
import { useRef } from "react";


function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            <span
                style={{
                    transform: isInView ? "none" : "translateX(-50%)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s ease-in 0.5s"
                }}
            >
                {children}
            </span>
        </section>
    );
}


const SingleProject = ({ project }) => {




    return (
        <Section> <div className="single-project-container">
            <div className="project-desc">
                <h3>{project.name}</h3>
                <p>{project.text}</p>
                <form className="project-btn-container" target="_blank">
                    <button formAction={project.site} className="project-btn hvr-sweep-to-right">see live</button>
                    <button formAction={project.git} className="project-btn hvr-sweep-to-right">source code</button>
                </form>

            </div >
            <a href={project.site} target="_blank" rel="noreferrer"> <img src={project.picture} alt={project.name} className="project-image" /></a>
        </div >
        </Section>
    )
}
export default SingleProject