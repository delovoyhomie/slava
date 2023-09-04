import { logo } from "../assets";

const Navbar = () => {
  function Home() {
    document.getElementsByClassName("skills")[0].classList.add("hidden");
    document.getElementsByClassName("work")[0].classList.add("hidden");
    document.getElementsByClassName("education")[0].classList.add("hidden");
    document.getElementsByClassName("activities")[0].classList.add("hidden");
    document.getElementsByClassName("home")[0].classList.remove("hidden");
  };

  function Skills() {
    document.getElementsByClassName("home")[0].classList.add("hidden");
    document.getElementsByClassName("work")[0].classList.add("hidden");
    document.getElementsByClassName("education")[0].classList.add("hidden");
    document.getElementsByClassName("activities")[0].classList.add("hidden");
    document.getElementsByClassName("skills")[0].classList.remove("hidden");
  };

  function Work() {
    document.getElementsByClassName("home")[0].classList.add("hidden");
    document.getElementsByClassName("skills")[0].classList.add("hidden");
    document.getElementsByClassName("education")[0].classList.add("hidden");
    document.getElementsByClassName("activities")[0].classList.add("hidden");
    document.getElementsByClassName("work")[0].classList.remove("hidden");
  };
  
  function Education() {
    document.getElementsByClassName("home")[0].classList.add("hidden");
    document.getElementsByClassName("work")[0].classList.add("hidden");
    document.getElementsByClassName("skills")[0].classList.add("hidden");
    document.getElementsByClassName("activities")[0].classList.add("hidden");
    document.getElementsByClassName("education")[0].classList.remove("hidden");
  };

  function Activities() {
    document.getElementsByClassName("home")[0].classList.add("hidden");
    document.getElementsByClassName("work")[0].classList.add("hidden");
    document.getElementsByClassName("education")[0].classList.add("hidden");
    document.getElementsByClassName("skills")[0].classList.add("hidden");
    document.getElementsByClassName("activities")[0].classList.remove("hidden");
  };


  return (
    <div className="flex flex-col">
      <div className="flex md:flex-col ml-3 md:ml-11 w-[18rem]">
          <img src={logo} alt="" className="ml-auto mr-auto rounded-full w-[5rem] md:w-[14rem] order-last md:order-first" />
          <div className="flex grow-0 flex-col ml-3 md:ml-0 md:pr-10 md:ml-0 mr-3 w-full md:text-right">
            <h2 className="text-[1.4rem] md:text-[1.9rem] mt-4"><b>Slava Yakimenko</b></h2>
            <h4 className="text-[1rem]md:text-[1.6rem]">Developer Relations</h4>
          </div>
      </div>
      <ul className="mt-4 md:text-right flex flex-col gap-4 ml-7 md:ml-0 mb-6 md:mt-auto md:mb-auto font-normal not_selected">
        <li className="list_nav" onClick={Home}>Home</li>
        <li className="list_nav" onClick={Skills}>Skills</li>
        <li className="list_nav" onClick={Work}>Work Experience</li>
          <li className="list_nav" onClick={Education}>Education</li>
        <li className="list_nav" onClick={Activities}>Activities</li>
      </ul>
    </div>
  );
};

export default Navbar;
