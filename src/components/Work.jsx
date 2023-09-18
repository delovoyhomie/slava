import { work } from "../constants";

const SkillCard = ({ info }) => (
    <div className="grow w-full md:grow-0 md:w-auto bg-[#2A0F2E] text-center text-white align-middle font-medium p-1.5 pr-3.5 pl-3.5 rounded-full">
      <p>{info}</p>
    </div>
  );
  
  const WorkBlock = ({ title, extra, data, info, skills_title, skills, link }) => (
    <div className="bg-[#FFFFFF] grow w-full flex flex-col flex-wrap gap-2 text-black p-4 rounded-[2rem] relative">
        <div className="md:flex md:grow-[3] md:justify-between">
            <h1 className="pl-1 text-usual font-bold">{title}</h1>
            <p className="pl-1 md:pl-0 text-less-black">{data}</p>
        </div>
      <p className="pl-1 text-less-black">{extra}</p>
      <ul className="list-disc pl-8">
        {info.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      <h1 className="pl-1 text-usual font-bold">{skills_title}</h1>
      <div className="flex flex-wrap gap-3 mb-6 md:mb-0">
        {skills.map((i) => (
          <SkillCard info={i} />
        ))}
      </div>
      <span className="absolute flex bottom-2 right-3 gap-1">
          <a href={link} className="flex p-1 pt-0 open pr-3 cursor-pointer">
              <svg className=" mt-auto mb-auto" width="28" height="28" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.8258 23.5565L33.6797 29.3305C30.2873 32.5206 24.784 32.5206 21.3916 29.3305C20.8569 28.83 20.439 28.2658 20.0719 27.6836L22.9276 24.9999C23.0634 24.8713 23.231 24.7975 23.3911 24.7108C23.5884 25.3449 23.9332 25.945 24.4636 26.4434C26.1577 28.0365 28.9147 28.0345 30.6076 26.4434L36.7517 20.6694C38.4469 19.0763 38.4469 16.4863 36.7517 14.8943C35.0587 13.3023 32.3028 13.3023 30.6076 14.8943L28.4224 16.9499C26.6499 16.3009 24.7394 16.1265 22.8798 16.3827L27.5356 12.0073C30.9301 8.81821 36.4313 8.81821 39.8258 12.0073C43.2182 15.1965 43.2182 20.3674 39.8258 23.5565ZM23.5778 33.051L21.3916 35.1066C19.6975 36.6977 16.9405 36.6977 15.2464 35.1066C13.5524 33.5135 13.5524 30.9236 15.2464 29.3306L21.3916 23.5565C23.0867 21.9635 25.8416 21.9635 27.5356 23.5565C28.065 24.054 28.4097 24.6541 28.6092 25.2871C28.7704 25.1994 28.9359 25.1276 29.0717 25L31.9274 22.3174C31.5625 21.7332 31.1424 21.1709 30.6077 20.6695C27.2153 17.4804 21.712 17.4804 18.3185 20.6695L12.1745 26.4435C8.78104 29.6336 8.78104 34.8035 12.1745 37.9936C15.5679 41.1817 21.0702 41.1817 24.4637 37.9936L29.1205 33.6172C27.2598 33.8744 25.3494 33.6989 23.5778 33.051Z" fill="#010101"/>
              </svg>
              <a href={link} className="font-bold text-[13px] mt-auto mb-auto">OPEN</a>
          </a>
      </span>
    </div>
  );

const Work = () => {
  return ( // max-h-screen overflow-scroll
    <div className={`work font-mono grow h-min flex flex-col flex-wrap gap-7 bg-need-pattern rounded-[2rem] mr-6 ml-6 items-start p-4 md:pl-6 pb-20 ${window.location.pathname == '/work' ? "" : "hidden"}`}>
        <h1 className="pl-2">Work Experience</h1>
        {work.map((i) => (
            <WorkBlock {...i} />
        ))}
    </div>

  );
};

export default Work;
