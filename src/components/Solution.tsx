import sol1 from "../assets/sol1.png";
import sol2 from "../assets/sol2.png";
import sol3 from "../assets/sol3.png";
import sol4 from "../assets/sol4.png";
import SolutionCard from "./SolutionCard";

const programs = [
  {
    title: "Internship Program – Learn by Doing",
    description:
      "Hands-on internship program providing real-world experience, industry exposure, practical skills, mentorship, and career readiness for students and graduates.",
    img: sol1,
  },
  {
    title: "Rural Workforce Skill Training",
    description:
      "Job-oriented skill training empowering rural workforce with practical abilities, stable employment opportunities, improved income, confidence, and long-term self-reliance.",
    img: sol2,
  },
  {
    title: "Eco-Village Learning Hub",
    description:
      "A live learning campus offering hands-on training, agriculture, enterprise development, classrooms, and community-based skill development opportunities.",
    img: sol3,
  },
  {
    title: "Career Launchpad",
    description:
      "Career-focused initiative connecting skills with placements, internships, mentorship, and enterprise creation to ensure sustainable employment and professional growth.",
    img: sol4,
  },
];

export default () => {
  return (
    <article
      id="solution"
      className="bg-primary text-white  px-4 lg:px-[200px] py-[106px] mt-[127px]"
    >
      <section className="text-center sm:mb-10">
        <h2 className="text-sm font-medium mb-3">The solution</h2>
        <h3 className="text-[28px] font-medium mb-2">
          An Integrated Ecosystem for Empowerment
        </h3>
        <p className="text-white/50  ">
          Our model is built on three core pillars that work together to create
          a powerful cycle of opportunity.
        </p>
      </section>
      <article className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[50px] gap-y-8 sm:gap-y-[42px] xl:gap-x-[105px] xl:gap-y-[81px] mt-21">
        {programs.map((program) => (
          <SolutionCard
            title={program.title}
            description={program.description}
            img={program.img}
          />
        ))}
      </article>
    </article>
  );
};
