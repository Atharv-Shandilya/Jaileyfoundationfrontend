import Questions from "./Questions";

export default () => {
  return (
    <article className="flex flex-row px-[119px] gap-x-[140px] py-[262px]">
      <article className=" w-[268px]">
        <h3 className="text-sm font-medium">FAQ</h3>
        <h4 className="font-semibold text-3xl italic mb-6">
          Frequently <br /> Asked <br /> Questions About{" "}
          <span className=" text-cta">Our Program</span>
        </h4>
        <button className=" bg-cta text-white px-10 py-2 rounded-md">
          Enroll Now
        </button>
      </article>
      <article className="flex-1 p-4">
        <Questions
          problem="What programs does Jalei Foundation offer Students"
          answer="We provide internships, rural workforce training, Eco-Village Learning Hub, and Career Launchpad programs for skill-building and employability."
        />
      </article>
    </article>
  );
};
