import logo from "../assets/Jailey-Foundation-Logo.svg";

export default () => {
  return (
    <header className="flex justify-between items-center max-w-[1300px] mx-auto py-6 px-2">
      <h1>
        <a href="#" className="flex cursor-pointer">
          <img src={logo} className="mr-3" />
          <p>
            Jale<span className="font-pacifico">I</span> Foundation
          </p>
        </a>
      </h1>
      <nav>
        <ul className="flex items-center [&>li]:mr-4">
          <li>
            <a href="#">The Problem</a>
          </li>
          <li>
            <a href="#">The Solution</a>
          </li>
          <li>
            <a href="#">How it works</a>
          </li>
          <li className="mr-10!">
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#" className=" bg-cta rounded-md py-3 px-10 text-white ">
              Enroll Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
