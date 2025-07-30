import React from "react";
import "../index.css";
import signin from "../assets/signin.jpg";
import btnimg from "../assets/Fill 25.png";
import google from "../assets/google 1.jpg";
import facebook from "../assets/facebook 1.jpg";
import apple from "../assets/path4.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import OtpInput from "./OtpInput";

const Verification = () => {
  const [otp, setOtp] = useState("");

  const onOtpSubmit = (otp) => {
    setOtp(otp);
    // console.log("Login Successfull" , otp);
  }

  const handleVerifyClick = () =>{
    if(otp.length===6) {
      alert("Login Sccessful");
      window.location.href = "/userprofile";
    }
    else{
      alert("Please enter the full 6-digit OTP");
    }
  }

  return (
    <div className="flex ">
      <div
        className="w-[774px] h-[783px]"
        style={{
          backgroundImage: `url(${signin})`,
          backgroundSize: "cover",
          // backgroundPosition: 'center'
        }}
      >
        <div className="pt-[241px] pl-[93px]">
          <button className="w-[207px] h-[66px] rounded-[6px] bg-[#2880DA] flex gap-0.5 items-center justify-center">
            <img className="w-[21.2px] h-[40px]" src={btnimg} alt="btn-img" />
            <div className="text-white font-semibold text-[25px]">HousNow</div>
          </button>
        </div>
        <div className="mt-[42px] ml-[93px]">
          <p className="text-white text-[55px] font-bold">Welcome</p>
          <p className="text-white text-[19px] font-normal  mt-[16px] w-[464px] h-[69px]">
            Enter your registered email and password to <br /> manage your
            Dashboard, track your Leads, and <br /> enjoy benefits.
          </p>
        </div>
      </div>

      <div className="w-[666px] h-[783px] bg-white">
        <nav className="flex justify-end mt-[28px] gap-9 mr-[106px]">
          <div className="w-[54px] h-[24px] font-semibold text-[15px] text-[#565656] ">
            Signup
          </div>
          <div className="font-semibold text-[15px] text-[#2880DA] ">
            <Link to="/signin"> Signin</Link>
          </div>
        </nav>
        <div className="w-[666px]  border-2 border-[#E9F1FB]"></div>

        <div className="flex flex-col justify-center items-center ">
        
            <div className="w-[184px] h-[42px] font-bold text-[35px] text-[#11142D] mt-[132px]">
                Verification
            </div>
           <OtpInput onOtpSubmit={onOtpSubmit}/>
             <button
              type="submit"
              onClick={handleVerifyClick}
              className="bg-[#2880DA] text-white pt-[14px] pr-[24px] pb-[14px] pl-[24px]  w-[400px] h-[56px] rounded-[8px] font-semibold text-[18px] mt-[40px] "
            >
              Verify
            </button>
            <div className="text-center">
                <div className="w-[157px] h-[21px] text-[14px] text-[#00000096] mt-[32px]">
                    Didn't recieve OTP yet?
                </div>
                <div>
                    <a href="" target="_blank" rel="noopener noreferrer" className="font-semibold text-[14px] text-[#2880DA] underline">Resend OTP</a>
                </div>
                <div className="text-[14px] font-normal text-[#00000078]">
                    in 1:59 min
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
