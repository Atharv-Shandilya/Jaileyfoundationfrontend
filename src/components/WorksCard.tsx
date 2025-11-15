export default ({
  alt,
  last,
  no,
  heading,
  description,
  img,
}: {
  alt?: boolean;
  last?: boolean;
  no: number;
  heading: string;
  description: string;
  img: string;
}) => {
  return (
    <section
      className={`flex  ${
        alt
          ? "flex-row-reverse -translate-x-[calc(50%-20px)] "
          : "translate-x-[calc(50%-20px)]"
      } mb-[55px]  `}
    >
      <div
        className="w-[42px] h-[42px] flex items-center justify-center bg-primary text-white p-2 
      rounded-xl relative"
      >
        <span>{no}</span>
        <span
          className={`w-9 h-0.5 bg-primary absolute top-1/2 ${
            alt ? "-left-9" : "-right-9"
          }`}
        ></span>
        {!last && (
          <span className="absolute w-0.5 h-[140px] bg-primary top-full"></span>
        )}
      </div>

      <div
        className={` mt-2  flex   ${
          alt ? "mr-12 flex-row-reverse text-right" : "ml-12"
        }`}
      >
        <div className={` ${alt ? "ml-4" : "mr-4"} relative top-1`}>
          <img src={img} alt="" />
        </div>
        <div className="max-w-[425px]">
          <h5 className=" text-[21px] mb-3">{heading}</h5>
          <p className="text-primary/50">{description}</p>
        </div>
      </div>
    </section>
  );
};
