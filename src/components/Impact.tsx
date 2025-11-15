import ImpactSvg from "../assets/impact-solution.svg";
import ImpactCard from "./ImpactCard";

export default () => {
  return (
    <article className="bg-primary text-white flex flex-col items-center py-[133px]">
      <section className="flex items-center mb-[92px]">
        <div className="max-w-[829px] mr-[88px]">
          <h3 className="text-sm mb-4 font-medium">
            The Impact (Results & Benefits)
          </h3>
          <h4 className="text-[28px] mb-6 font-medium">
            Driving National Transformation from the Ground Up
          </h4>
          <p className="text-white/50">
            Witnessing the transformation: How practical skills unlock
            potential, strengthen communities, and build brighter futures.
          </p>
        </div>
        <img src={ImpactSvg} alt="" />
      </section>
      <section className=" grid grid-cols-2 gap-x-[23px] gap-y-16 max-w-[1196px]">
        <ImpactCard />
        <ImpactCard />
        <ImpactCard />
        <ImpactCard />
      </section>
    </article>
  );
};
