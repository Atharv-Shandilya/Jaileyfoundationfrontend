import arrow from "../assets/arrow.svg";

export default ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <section className="flex justify-center flex-col items-center border p-6 border-white/10  rounded-xl">
      <img src={img} className="mb-5 w-full" />
      <h4 className="text-lg font-semibold mb-5">{title} </h4>
      <p className="mb-7">{description}</p>
      <button className=" bg-cta flex items-center w-full py-3 justify-center rounded-full cursor-pointer">
        Enroll Now <img src={arrow} alt="Arrow" className="ml-2 " />
      </button>
    </section>
  );
};
