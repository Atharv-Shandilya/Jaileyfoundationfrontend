export default () => {
  const testimonials = [
    {
      name: "Reeta Kumar",
      message:
        '"Jalei Foundation gave me practical skills, confidence, and real work exposure that helped me secure meaningful employment."',
    },
    {
      name: "Afreen Singh",
      message:
        '"The internship program transformed my learning into real experience and opened career opportunities I never imagined possible."',
      alt: true,
    },
    {
      name: "Sita Devi",
      message:
        '"Rural skill training helped me earn independently and support my family with dignity and confidence."',
    },
    {
      name: "Reeta Kumar",
      message:
        '"Eco-Village Learning Hub provided hands-on training that connected education with real-life applications and entrepreneurship."',
      alt: true,
    },
    {
      name: "Anjali Verma",
      message:
        '"Mentors guided me at every step, helping me grow professionally and personally through structured skill programs."',
    },
    {
      name: "Vikram Yadav",
      message:
        '"Jalei Foundation bridged the gap between studies and jobs with practical training and placement support."',
      alt: true,
    },
    {
      name: "Pooja Singh",
      message:
        '"Career Launchpad helped me gain skills, internships, and direction to build a sustainable future."',
    },
    {
      name: "Ramesh Kumar",
      message:
        '"These programs empowered our community by creating jobs, reducing migration, and building local opportunities."',
      alt: true,
    },
  ];

  return (
    <article className="pt-16 px-9">
      <div className="text-center">
        <h2 className="text-sm mb-3 text-primary">Social Proof</h2>
        <h3 className="text-3xl font-medium text-primary">
          Word on the street
        </h3>
        <p className="mt-4 text-primary/50">
          What people are saying about their experiences in the community.
        </p>
      </div>

      <article className=" hidden lg:grid mt-18  grid-cols-4 grid-rows-auto gap-10">
        {testimonials.map((testimonial, index) => (
          <section
            key={index}
            className={`border border-black/10 px-7 pt-[70px] pb-[42px] rounded-md flex flex-col justify-between  ${testimonial.alt ? " bg-[#6F9C76] text-white h-[350px]" : "h-fit"}`}
          >
            <p className="mb-11">{testimonial.message}</p>
            <p className="text-xl font-semibold">{testimonial.name}</p>
          </section>
        ))}
      </article>

      <article className="mt-18 grid lg:hidden md:grid-cols-3 grid-rows-auto gap-10">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <section
            key={index}
            className={`border border-black/10 px-7 pt-[70px] pb-[42px] rounded-md flex flex-col justify-between  ${testimonial.alt ? " bg-[#6F9C76] text-white md:h-[350px]" : "h-fit"}`}
          >
            <p className="mb-11">{testimonial.message}</p>
            <p className="text-xl font-semibold">{testimonial.name}</p>
          </section>
        ))}
      </article>
    </article>
  );
};
