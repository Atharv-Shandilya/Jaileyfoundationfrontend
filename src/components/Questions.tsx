import { useState } from "react";

export default ({ problem, answer }: { problem: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="border border-black/10 p-4 mb-5">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-xl font-medium">{problem}</h3>
        <div
          className="text-3xl font-light cursor-pointer relative -top-0.5"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? "-" : "+"}
        </div>
      </div>
      {isOpen && <p className=" w-[90%] text-black/50">{answer}</p>}
    </section>
  );
};
