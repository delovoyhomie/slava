import { skills, skills2 } from "../constants";

const SkillCard = ({ info }) => (
  <div className="bg-[#F6F6F6] text-center align-middle text-black font-bold p-1.5 pr-3.5 pl-3.5 rounded-full">
    <p>{info}</p>
  </div>
);

const SkillBlock = ({ title, info }) => (
  <div className="pl-3 flex flex-col flex-wrap gap-3">
    <h1 className="pl-1">{title}</h1>
    <div className="flex flex-wrap gap-3">
      {info.map((i) => (
        <SkillCard info={i} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className={`skills grow h-min flex flex-col flex-wrap gap-4 bg-need-pattern rounded-[2rem] mr-6 ml-6 items-start p-4 md:pl-6 pb-20 ${window.location.pathname === '/skills' ? "" : "hidden"}`}>
      <h1 className="text-[1.3rem] font-semibold text-usual">Hard skills</h1>
      {skills.map((skill) => (
        <SkillBlock title={skill.id} info={skill.info} />
      ))}
      <h1 className="text-[1.3rem] font-semibold text-usual">Soft skills</h1>
      {skills2.map((skill) => (
        <SkillBlock title={skill.id} info={skill.info} />
      ))}
    </div>

  );
};

export default Skills;
