import "./about.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function Item({ title, content }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section id="about_page">
      <div ref={ref}>
        <h1 className="w-full text-white text-center text-2xl">{title}</h1>
        <figure className="progress">
          <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
        <p className="text-gray-500 text-[11px] text-center p-2">{content}</p>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="relative grid md:grid-cols-2 py-8 md:py-2">
      <p className="absolute w-full text-gray-500 text-center md:top-[46%] text-3xl md:text-6xl">
        About Us
      </p>
      <Item
        title="Our Mission"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          libero veritatis explicabo, cumque, aperiam saepe laudantium maxime
          nobis reiciendis quos doloribus? Consectetur obcaecati magni nostrum
          necessitatibus quibusdam commodi similique deleniti!"
      />
      <Item
        title="Our Vision"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          libero veritatis explicabo, cumque, aperiam saepe laudantium maxime
          nobis reiciendis quos doloribus? Consectetur obcaecati magni nostrum
          necessitatibus quibusdam commodi similique deleniti!"
      />
      <Item
        title="Our History"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          libero veritatis explicabo, cumque, aperiam saepe laudantium maxime
          nobis reiciendis quos doloribus? Consectetur obcaecati magni nostrum
          necessitatibus quibusdam commodi similique deleniti!"
      />
      <Item
        title="Our Goal"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          libero veritatis explicabo, cumque, aperiam saepe laudantium maxime
          nobis reiciendis quos doloribus? Consectetur obcaecati magni nostrum
          necessitatibus quibusdam commodi similique deleniti!"
      />
    </div>
  );
}
