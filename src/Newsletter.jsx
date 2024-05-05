import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TickIcon from "./assets/images/icon-list.svg";
import ImageDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import ImageMobile from "./assets/images/illustration-sign-up-mobile.svg";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const emailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleSubmit = () => {
    if (!email || !emailValid.test(email)) {
      setError(true);
    } else {
      setError(false);
      navigate("/success");
    }
  };

  return (
    <div className="flex flex-col-reverse bg-white md:rounded-[40px] md:flex-row md:p-5 md:h-[642px]">
      <div className="py-10 md:py-16 px-12 md:px-8 sm:px-5 color-charcoalGrey">
        <h1 className="lg:text-[55px] md:text-[55px] sm:text-[40px] font-[700] mb-3">Stay updated!</h1>
        <p className="max-w-[380px] mb-5">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="flex flex-col">
          <li className="flex items-start mb-3">
            <img src={TickIcon} alt="list" className="mr-4" />
            <span className="inline-flex">Product discovery and building what matters</span>
          </li>
          <li className="flex items-start mb-3">
            <img src={TickIcon} alt="list" className="mr-4" />
            <span className="inline-flex">Measuring to ensure updates are a success</span>
          </li>
          <li className="flex items-start mb-10">
            <img src={TickIcon} alt="list" className="mr-4" />
            <span className="inline-flex">And much more!</span>
          </li>
        </ul>

        <div className="flex justify-between">
          <label className="text-[12px] font-[700]">Email address</label>
          <span className={`${error ? "text-[12px] font-[700] text-tomato" : ""}`}>
            {error && "Valid email required"}
          </span>
        </div>
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className={`${
            error
              ? "border-2 border-tomato bg-red-200 placeholder-tomato"
              : "border-2"
          } rounded-lg -mt-5 mb-5 py-4 px-6 w-[100%]`}
          type="email"
          placeholder="email@company.com"
        />
        <br />
        <button
          onClick={handleSubmit}
          className="bg-darkSlateGray text-white font-[700] rounded-lg py-4 px-6 w-[100%] transition ease-in-out duration-300 hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500 hover:shadow-2xl hover:shadow-pink-500"
        >
          Subscribe to monthly newsletter
        </button>
      </div>
      <div>
        <img
          alt="desktop image"
          className="h-[100%] hidden md:block py-1 px-1 ml-2"
          src={ImageDesktop}
        />
        <img 
          alt="mobile image" 
          className="w-[100%] md:hidden" 
          src={ImageMobile} />
      </div>
    </div>
  );
};

export default Newsletter;

        
