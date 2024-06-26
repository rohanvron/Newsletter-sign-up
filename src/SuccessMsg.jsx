import { useNavigate } from "react-router-dom";
import success from "./assets/images/icon-success.svg";

const SuccessMsg = () => {
  const navigate = useNavigate();

  const handleDismiss = () => {
    navigate("/Newsletter-sign-up/");
  };

  return (
    <div className="bg-white px-6 md:py-10 md:px-14 md:rounded-[30px] md:h-[480px] md:w-[500px]">
      <img
        className="h-[55px] w-[55px] mt-[100px] md:mt-0 mb-10"
        src={success}
        alt="success-icon"
      />
      <h1 className="text-4xl md:text-5xl font-[700] mb-5">
        Thanks for subscribing!
      </h1>
      <p className="text-[14px]">
        A confirmation email has been sent to
        <span className="font-[700]"> ash@loremcompany.com. </span>
        Please open it and click the button inside to confirm your subsctiption.
      </p>
      <button
        onClick={handleDismiss}
        className="bg-darkSlateGray text-white font-[700] 
                    rounded-lg py-4 px-6 mt-[160px] md:mt-10 w-[100%] 
                    transition ease-in-out duration-300 
                    hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500 
                    hover:shadow-2xl hover:shadow-pink-500
                    sm:mt-64" 
      >
        Dismiss message
      </button>
    </div>
  );
};

export default SuccessMsg;