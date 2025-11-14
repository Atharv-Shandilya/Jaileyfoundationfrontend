import ProblemCard from "./ProblemCard";
import IndiaImage from "../assets/India.png";
export default () => {
  return (
    <article className="mb-4 max-w-[1300px] mx-auto flex mt-[88px]">
      <section className="w-[55%]">
        <h2 className="font-medium text-sm mb-4">The Problem</h2>
        <h3 className="text-[28px] font-medium mb-[26px]">
          The Workforce Skill Crisis in Bihar
        </h3>
        <p className="text-black/50 mb-[50px]">
          Bihar's greatest strength is its young people, but a skills gap holds
          them back. Our educated youth graduate with degrees but lack the
          hands-on experience to start a career. At the same time, our rural
          workforce has immense potential but lacks formal training for skilled,
          stable jobs. This forces our best talent to leave the state.
        </p>

        <article className="grid grid-cols-2 gap-x-[25px] gap-y-[45px]  pr-20">
          <ProblemCard
            percentage="19.8%."
            problem="Bihar's youth unemployment rate"
            source="Periodic Labour Force Survey (PLFS), Mid-2025 Data."
          />
          <ProblemCard
            percentage="41.5%."
            problem="The employability of graduates in Bihar is significantly lower than the national average."
            source="India Skills Report 2025, Regional Analysis."
          />
          <ProblemCard
            percentage="35%."
            problem="Bihar has the second-highest rate of out-migration in India"
            source="Economic Survey of Bihar, 2024-25 / NITI Aayog Reports."
          />
          <ProblemCard
            percentage="90%."
            problem="Bihar's workforce is engaged in the informal or unorganized sector."
            source="State Labour Department Reports, 2025."
          />
        </article>
      </section>
      <section className="flex-1 mt-[60px]">
        <img src={IndiaImage} />
      </section>
    </article>
  );
};
