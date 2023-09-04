import { education } from "../constants";
  
const EduBlock = ({ title, data, info }) => (
    <div className="bg-[#FFFFFF] grow w-full flex flex-col flex-wrap gap-2 text-black p-4 rounded-[1rem]">
        <div className="flex grow-[3] justify-between">
            <h1 className="pl-1 text-usual font-bold">{title}</h1>
            <p className="text-less-black">{data}</p>
        </div>
      <p className="pl-1 text-less-black">{info}</p>
    </div>
  );

const Education = () => {
  return (
    <div className="education hidden font-mono grow h-min flex flex-col flex-wrap gap-7 bg-need-pattern rounded-[2rem] mr-6 ml-6 items-start p-4 md:pl-6 pb-20">
        <h1 className="pl-2">Education</h1>
        {education.map((i) => (
            <EduBlock {...i} />
        ))}
    </div>

  );
};

export default Education;
