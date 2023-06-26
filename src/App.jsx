import Hero from "./components/Hero";
import More from "./components/More";
import { projects } from "./assets/projects";
import Projects from "./components/Projects";
import { useEffect, useRef } from "react";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { useInView } from "framer-motion";



function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1s ease-in 0.1s",
          transform: isInView ? "none" : "translateX(-50%)",
        }}
      >
        {children}
      </span>
    </section>
  );
}



function App() {
  const resultRef = useRef(null);
  return (
    <>
      <div className="page-control">
        <Hero resultRef={resultRef} />
        <Section><More ref={resultRef} /></Section>
        <Projects projects={projects} />
        <Section><ContactMe /></Section>
      </div>
      <Footer />
    </>
  )
}

export default App
