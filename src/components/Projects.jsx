import SingleProject from "./SingleProject";
import { useInView } from "framer-motion";
import { useRef } from "react";


function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            <span
                style={{
                    transform: isInView ? "none" : "translateX(-1000px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </span>
        </section>
    );
}





const Projects = ({ projects }) => {
    return (

        <div className="projects">
            <Section>  <h2>Projects</h2> </Section>
            {
                projects.map((project) => {
                    return <SingleProject key={project.id} project={project} />
                })
            }
        </div >

    )
}
export default Projects