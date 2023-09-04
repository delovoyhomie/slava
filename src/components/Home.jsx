import { twitter } from "../assets";
import { home } from "../constants";

const Hero = () => {
  return (
    <div className="home grow flex flex-col bg-need-pattern rounded-[2rem] mr-6 ml-6 items-start pb-20 h-min">
        <h1 className="text-[2rem] mt-4 ml-4 mb-1 font-medium font-usual">Hey, I'm <b>Slava</b></h1>
        {home.map((i) => (
            <div>
              <h1 className="text-[1.3rem] mt-3 ml-4 mr-8 font-semibold">{i.title}</h1>
              <h4 className="pl-3 text-[1.35rem] mt-2 ml-4 mr-8 font-medium">{i.info}</h4>
            </div>
        ))}
        <div className="md:pl-3 w-full grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
            <a href="https://github.com/delovoyhomie" className="flex items-center ml-3 OneLink">
              <svg className="OneLinkSvg" width="38" height="38" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="OneLinkSvg" d="M34.5 0C15.4503 0 0 15.4474 0 34.5C0 49.7433 9.88425 62.675 23.5951 67.2376C25.3172 67.5567 25.875 66.4873 25.875 65.5788V59.156C16.2782 61.2433 14.2801 55.085 14.2801 55.085C12.7104 51.0974 10.4478 50.0365 10.4478 50.0365C7.31688 47.8946 10.6864 47.9406 10.6864 47.9406C14.1508 48.1821 15.9735 51.497 15.9735 51.497C19.0498 56.7698 24.0436 55.246 26.013 54.3634C26.3206 52.1353 27.2148 50.6115 28.2038 49.7519C20.5419 48.875 12.4861 45.9166 12.4861 32.7002C12.4861 28.9311 13.8345 25.8549 16.0396 23.4399C15.6831 22.5688 14.5015 19.0584 16.376 14.3089C16.376 14.3089 19.274 13.3831 25.8664 17.8451C28.6178 17.0804 31.5675 16.698 34.5 16.6836C37.4325 16.698 40.3851 17.0804 43.1423 17.8451C49.7289 13.3831 52.6211 14.3089 52.6211 14.3089C54.4985 19.0613 53.3169 22.5716 52.9604 23.4399C55.1741 25.8549 56.511 28.934 56.511 32.7002C56.511 45.9511 48.4409 48.8693 40.7589 49.7231C41.9951 50.7926 43.125 52.8914 43.125 56.1114V65.5788C43.125 66.4959 43.677 67.574 45.4279 67.2347C59.1272 62.6664 69 49.7375 69 34.5C69 15.4474 53.5526 0 34.5 0Z" fill="white"/>
              </svg>
              <p className="ml-4">My Github Profile</p>
            </a>

            <a href="https://twitter.com/delovoyslava" className="flex items-center ml-3 OneLink">
              <svg className="OneLinkSvg" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 50 50" width="38px" height="38px"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/></svg>
              <p className="ml-4">My Twitter Account</p>
            </a>

            <a href="https://t.me/delovoyslava" className="flex items-center ml-3 OneLink">
              <svg className="OneLinkSvg" width="38" height="38" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="OneLinkSvg" d="M61.6473 9.25041C60.9788 8.68884 60.17 8.31989 59.3076 8.18313C58.4453 8.04638 57.5621 8.14699 56.7526 8.47416L7.35291 28.247C6.6328 28.5461 6.01746 29.0519 5.58457 29.7004C5.15168 30.349 4.92065 31.1113 4.92065 31.891C4.92065 32.6708 5.15168 33.4331 5.58457 34.0816C6.01746 34.7302 6.6328 35.236 7.35291 35.5351L10.5442 36.8504C11.0703 37.073 11.6633 37.0777 12.1929 36.8634C12.7225 36.6491 13.1455 36.2334 13.3688 35.7076C13.4784 35.4457 13.5352 35.1648 13.536 34.881C13.5367 34.5971 13.4814 34.3159 13.3733 34.0535C13.2651 33.791 13.1061 33.5525 12.9056 33.3516C12.705 33.1508 12.4667 32.9915 12.2045 32.8829L9.8326 31.9126L58.3698 12.5064C58.4444 12.4606 58.5302 12.4364 58.6178 12.4364C58.7053 12.4364 58.7911 12.4606 58.8657 12.5064C58.9361 12.5661 58.9892 12.6436 59.0195 12.7308C59.0499 12.818 59.0563 12.9118 59.0382 13.0023L50.176 54.3592C50.147 54.5065 50.08 54.6436 49.9816 54.7571C49.8833 54.8705 49.7571 54.9563 49.6154 55.006C49.4764 55.0612 49.3252 55.0783 49.1774 55.0555C49.0296 55.0328 48.8905 54.9711 48.7745 54.8767L31.5245 41.4217L48.4079 24.3657C48.7686 23.9915 48.982 23.4997 49.0088 22.9807C49.0356 22.4616 48.8741 21.9504 48.5539 21.541C48.2338 21.1316 47.7765 20.8517 47.2663 20.7526C46.7562 20.6536 46.2274 20.7421 45.7773 21.002L21.0235 35.6645C20.7486 35.7887 20.5028 35.9693 20.302 36.1945C20.1013 36.4197 19.95 36.6846 19.858 36.9719C19.766 37.2592 19.7353 37.5627 19.768 37.8626C19.8006 38.1626 19.8958 38.4523 20.0475 38.7132C20.1991 38.974 20.4038 39.2001 20.6483 39.3768C20.8928 39.5536 21.1717 39.6771 21.4669 39.7393C21.7622 39.8015 22.0672 39.8011 22.3622 39.738C22.6573 39.675 22.9358 39.5507 23.1798 39.3732L33.5945 33.2279L28.5273 38.3813C28.0637 38.8169 27.7023 39.3496 27.4688 39.9413C27.2353 40.5329 27.1356 41.1689 27.1768 41.8037C27.218 42.4384 27.3991 43.0562 27.7072 43.6127C28.0152 44.1692 28.4425 44.6507 28.9585 45.0226L46.2085 58.2835C47.1164 58.9842 48.2314 59.3634 49.3782 59.3617C49.9889 59.3573 50.5943 59.2478 51.1679 59.0382C51.9916 58.7425 52.7256 58.2403 53.2995 57.5795C53.8733 56.9188 54.2679 56.1218 54.4454 55.2648L63.2429 13.951C63.4296 13.0965 63.3797 12.2072 63.0986 11.3789C62.8174 10.5506 62.3156 9.8147 61.6473 9.25041Z" fill="white"/>
              </svg>
              <p className="ml-4">My Telegram Account</p>
            </a>

            <a href="https://codeforces.com/profile/SlavaYakimenko" className="flex items-center ml-3 OneLink">
              <svg className="OneLinkSvg" fill="white" width="38" height="38" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Codeforces</title><path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/></svg>
              <p className="ml-4">My Codeforces Profile</p>
            </a>

        </div>
    </div>

  );
};

export default Hero;