import { useRef } from "react";
import bgVector from "../assets/meter.png";
import Counter from "./Counter";

export default () => {
  const sectionRef = useRef(null);
  return (
    <article
      className=" py-21"
      style={{
        backgroundImage: `url(${bgVector})`,
      }}
      ref={sectionRef}
    >
      <section className="flex justify-center gap-x-[200px] ">
        <Counter
          max={1000}
          inc={51}
          sybmol="+"
          label="Learners"
          ref={sectionRef}
        />
        <Counter
          max={300}
          inc={21}
          sybmol="+"
          label="Job Placments"
          ref={sectionRef}
        />
        <Counter
          max={90}
          inc={11}
          sybmol="%"
          label="Program Completion"
          ref={sectionRef}
        />
        <Counter
          max={10}
          inc={1}
          sybmol="+"
          label="Skill Development Programs"
          ref={sectionRef}
        />
      </section>
      <section className="text-center mt-14">
        <button className="bg-white px-19 py-2 rounded-3xl cursor-pointer">
          Get Internship now
        </button>
      </section>
    </article>
  );
};
