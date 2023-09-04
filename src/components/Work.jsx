import { work } from "../constants";

const SkillCard = ({ info }) => (
    <div className="grow w-full md:grow-0 md:w-auto bg-[#2A0F2E] text-center text-white align-middle font-medium p-1.5 pr-3.5 pl-3.5 rounded-full">
      <p>{info}</p>
    </div>
  );
  
  const WorkBlock = ({ title, extra, data, info, skills_title, skills }) => (
    <div className="bg-[#FFFFFF] grow w-full flex flex-col flex-wrap gap-2 text-black p-4 rounded-[2rem]">
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
      <div className="flex flex-wrap gap-3">
        {skills.map((i) => (
          <SkillCard info={i} />
        ))}
      </div>
    </div>
  );

const Work = () => {
  return ( // max-h-screen overflow-scroll
    <div className="work hidden font-mono grow h-min flex flex-col flex-wrap gap-7 bg-need-pattern rounded-[2rem] mr-6 ml-6 items-start p-4 md:pl-6 pb-20">
        <h1 className="pl-2">Work Experience</h1>
        {work.map((i) => (
            <WorkBlock {...i} />
        ))}
    </div>

  );
};

export default Work;
