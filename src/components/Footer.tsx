import { RiInstagramLine, RiTwitterXFill, RiGithubLine } from "react-icons/ri";
import Logo from "../UI/Logo";

const Footer = () => {
  return (
    <footer className="flex flex-col overflow-hidden gap-32 max-sm:gap-20 py-16 px-20 max-sm:px-6 relative">
      <div className="absolute bottom-[-80%] max-sm:bottom-0 left-[15%] max-sm:right-[10%] blur-[150px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 w-[50rem] max-sm:w-96 h-[20rem] -z-10" />
      <div className="flex max-sm:flex-col max-sm:gap-8 justify-between">
        <div className="flex flex-col items-start gap-4">
          <Logo />
          <p className="text-gray-200">
            Your altimate tech events <br /> exploring platform.
          </p>
        </div>
        <div>
          <h1 className="text-xl mb-2">Menu</h1>
          <ul>
            <li className="text-gray-400">
              <a href="/main#home">Home</a>
            </li>
            <li className="text-gray-400">
              <a href="/main#about">About</a>
            </li>
            <li className="text-gray-400">
              <a href="/main#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl mb-2">Explore</h1>
          <ul>
            <li className="text-gray-400">
              <a href="/main#events">Events</a>
            </li>
            <li className="text-gray-400">
              <a href="/main#categories">Categories</a>
            </li>
            <li className="text-gray-400">
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl mb-2">Community</h1>
          <p className="text-gray-400">
            Connect with other <br /> events attendees.
          </p>
        </div>
      </div>
      <div className="flex max-sm:flex-col gap-8 justify-between">
        <div className="flex gap-6">
          <a href="/main/policy/terms" target="_blank">
            Terms
          </a>
          <a href="/main/policy/privacy" target="_blank">
            Privacy
          </a>
          <a href="/main/policy/cookies" target="_blank">
            Cookies
          </a>
        </div>
        <div className="max-sm:order-last">
          &copy; 2025 By Bader. All Right Reserved.
        </div>
        <div className="flex -mt-2 gap-5">
          <RiInstagramLine className="text-4xl rounded-full border border-gray-400 p-2 hover:text-gray-900 hover:bg-gray-200 transition duration-400" />
          <RiTwitterXFill className="text-4xl rounded-full border border-gray-400 p-2 hover:text-gray-900 hover:bg-gray-200 transition duration-400" />
          <a href="https://github.com/ben-bader/Innovex">
            <RiGithubLine className="text-4xl rounded-full border border-gray-400 p-2 hover:text-gray-900 hover:bg-gray-200 transition duration-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
