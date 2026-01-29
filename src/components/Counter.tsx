import { forwardRef, useEffect, useState, type ForwardedRef } from "react";

export default forwardRef(
  (
    {
      max,
      inc,
      sybmol,
      label,
    }: { max: number; inc: number; sybmol: string; label: string },
    sectionRef: ForwardedRef<HTMLElement>,
  ) => {
    const [counter, setCounter] = useState(0);
    const [started, hasStarted] = useState<boolean>(false);

    console.log(typeof inc);

    useEffect(() => {
      if (!sectionRef || typeof sectionRef === "function") return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            hasStarted(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.4,
        },
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!started) return;

      if (counter < max) {
        const t = setInterval(() => {
          setCounter((prev) => Math.min(prev + inc, max));
        }, 50);

        return () => clearInterval(t);
      }
    }, [started, counter]);
    return (
      <section className="text-center text-white">
        <p className=" font-semibold text-5xl mb-6">
          {counter}
          {sybmol}
        </p>
        <p className="relative -left-2">{label}</p>
      </section>
    );
  },
);
