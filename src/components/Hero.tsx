import EnrollNow from "./EnrollNow";
import HeroImage from "../assets/hero-image.png";
import ScrollImage from "../assets/scroll-mouse.png";

export default () => {
  return (
    <>
      <article className="bg-primary px-[60px] flex items-center max-w-[1300px] mx-auto rounded-b-2xl">
        <section>
          <h2 className="text-white text-[32px] mb-[22px] font-semibold leading-[150%]">
            Knowledge is in the classroom. Opportunity is in the field. We
            bridge the distance.
          </h2>
          <p className="text-white/50 mb-[46px] max-w-[580px] leading-[125%]">
            Our innovative internship program builds a powerful ecosystem where
            educated youth gain essential hands-on experience, and rural
            communities develop the skills for a sustainable future.
          </p>
          <div className="flex gap-x-5">
            <EnrollNow />
            <a
              href="#"
              className=" bg-white rounded-md py-3 px-10  inline-block"
            >
              Learn More
            </a>
          </div>
        </section>

        <img src={HeroImage} className="mt-[65px]" alt="Hero Image" />
      </article>

      <div className="flex justify-center mt-[94px]">
        <section className="flex flex-col items-center">
          <img
            src={ScrollImage}
            className="mb-2"
            alt="Mouse Scroll Indicator"
          />
          <p className="text-sm">Scroll Down</p>
        </section>
      </div>
    </>
  );
};
