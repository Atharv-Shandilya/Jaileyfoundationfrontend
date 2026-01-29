import { useState } from "react";
import arrow from "../assets/arrow.svg";
import EnrollmentModal from "./EnrollmentModal";

export default ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="flex justify-center flex-col items-center border p-6 border-white/10  rounded-xl">
        <img src={img} className="mb-5 w-full" />
        <h4 className="text-lg font-semibold mb-5">{title} </h4>
        <p className="mb-7">{description}</p>
        <button
          className=" bg-cta flex items-center w-full py-3 justify-center rounded-full cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Enroll Now <img src={arrow} alt="Arrow" className="ml-2 " />
        </button>
      </section>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
