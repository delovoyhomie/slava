import { activities } from "../constants";

const ActBlock = ({ title, info, imgs, link }) => {

    function handleClick(title) {
        let i = 0;
        let g = document.getElementsByClassName("svg_img")[0];
        while (g.getAttribute('title') != title) {
            console.log(g.getAttribute('title'));
            console.log(title);
            i++;
            g = document.getElementsByClassName("svg_img")[i];
        }
        g.classList.toggle("rotate_img");
        let g2 = document.getElementsByClassName("list_images")[i];
        g2.classList.toggle("hidden");
    };

    return (<div className="max-h-min bg-[#FFFFFF] grow w-full flex flex-col flex-wrap gap-2 text-black p-4 rounded-[1rem] relative">
        <h1 className="pl-1 text-usual font-bold">{title}</h1>
        <p className="pl-1 mb-1 text-less-black">{info}</p>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <span className="absolute flex bottom-2 right-2 gap-1">
            <a href={link} className="flex p-1 pt-0 open">
                <svg className=" mt-auto mb-auto" width="28" height="28" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.8258 23.5565L33.6797 29.3305C30.2873 32.5206 24.784 32.5206 21.3916 29.3305C20.8569 28.83 20.439 28.2658 20.0719 27.6836L22.9276 24.9999C23.0634 24.8713 23.231 24.7975 23.3911 24.7108C23.5884 25.3449 23.9332 25.945 24.4636 26.4434C26.1577 28.0365 28.9147 28.0345 30.6076 26.4434L36.7517 20.6694C38.4469 19.0763 38.4469 16.4863 36.7517 14.8943C35.0587 13.3023 32.3028 13.3023 30.6076 14.8943L28.4224 16.9499C26.6499 16.3009 24.7394 16.1265 22.8798 16.3827L27.5356 12.0073C30.9301 8.81821 36.4313 8.81821 39.8258 12.0073C43.2182 15.1965 43.2182 20.3674 39.8258 23.5565ZM23.5778 33.051L21.3916 35.1066C19.6975 36.6977 16.9405 36.6977 15.2464 35.1066C13.5524 33.5135 13.5524 30.9236 15.2464 29.3306L21.3916 23.5565C23.0867 21.9635 25.8416 21.9635 27.5356 23.5565C28.065 24.054 28.4097 24.6541 28.6092 25.2871C28.7704 25.1994 28.9359 25.1276 29.0717 25L31.9274 22.3174C31.5625 21.7332 31.1424 21.1709 30.6077 20.6695C27.2153 17.4804 21.712 17.4804 18.3185 20.6695L12.1745 26.4435C8.78104 29.6336 8.78104 34.8035 12.1745 37.9936C15.5679 41.1817 21.0702 41.1817 24.4637 37.9936L29.1205 33.6172C27.2598 33.8744 25.3494 33.6989 23.5778 33.051Z" fill="#010101"/>
                </svg>
                <a href={link} className="font-bold text-[13px] mt-auto mb-auto cursor-pointer">OPEN</a>
            </a>
            <a className="flex p-1 images" onClick={() => handleClick(title)}>
                <svg title={title} className="rotate_img svg_img mt-auto mb-auto" width="28" height="28" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.14328 33.0653C3.14328 32.1189 3.4874 31.3153 4.17564 30.6546L22.3397 13.2171C23.0465 12.5385 23.8929 12.1992 24.8788 12.1992C25.8832 12.1992 26.7203 12.5385 27.3899 13.2171L45.554 30.6546C46.2608 31.2974 46.6143 32.101 46.6143 33.0653C46.6143 34.0117 46.2608 34.8242 45.554 35.5028L43.4893 37.5117C42.7638 38.1724 41.9175 38.5028 40.9502 38.5028C39.9643 38.5028 39.1273 38.1724 38.439 37.5117L24.8788 24.4939L11.3185 37.5117C10.6303 38.1724 9.7932 38.5028 8.80734 38.5028C7.84008 38.5028 6.99372 38.1724 6.26828 37.5117L4.17564 35.5028C3.4874 34.8064 3.14328 33.9939 3.14328 33.0653Z" fill="black"/>
                </svg>

                <p className="font-bold text-[13px] mt-auto mb-auto cursor-pointer">IMAGES</p>

            </a>
        </span>
        <div title={title} className="hidden grid gap-1 overflow-hidden max-h-[1200px] grid-cols-1 md:max-h-[500px] md:grid-cols-3 list_images">
            {imgs.map((i) => (
                <img src={i} alt="" />
            ))}
        </div>
    </div>
    );
  };

const Activities = () => {
  return (
    <div className={`activities font-mono grow h-min flex flex-col flex-wrap gap-7 bg-need-pattern rounded-[2rem] mr-6 ml-6 items-start p-4 md:pl-6 pb-20 ${window.location.pathname == '/activities' ? "" : "hidden"}`}>
        <h1 className="pl-2">Activities</h1>
        {
            activities.map((i) => (
                <ActBlock {...i} />
            ))
        }
    </div>

  );
};

export default Activities;
