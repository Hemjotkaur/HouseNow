import React from "react";
import "../index.css";
import signin from "../assets/signin.jpg";
import  userlogo from "../assets/Mask group.png";
import bgimg from "../assets/Subtract.png";
import tick from "../assets/Vector (7).png";
import user from "../assets/Group.png";
import bulb from "../assets/Vector (8).png";
import glasses from "../assets/Vector.jpg";
import btnimg from "../assets/Fill 25.png";
import google from "../assets/google 1.jpg";
import userphoto from "../assets/Avatar.jpg";
import facebook from "../assets/facebook 1.jpg";
import apple from "../assets/path4.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Biometric = () => {
  let [number, setPhoneNumber] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    let userDetails = {
      email: email,
      password: password,
    };
    let userdetails = JSON.parse(localStorage.getItem("users")) || [];
    const user = userdetails.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      alert("Login successful!");
      window.location.href = "/";
    } else {
      alert("Invalid email or password");
      return;
    }
  };

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

        <div className="flex flex-col  items-start ml-[126px] ">
          <div className=" self-start font-bold text-[35px] text-[#11142D] mt-[29px]">
            Biometric <br /> Authentications
            <div className="text-[15px] font-normal mt-[11px]">
              we require a selfie for identification
            </div>
          </div>
        <div className="w-[199.85px] h-[200.77px] mt-[17.12px] ml-[96.35px] ">
          <div
            className="flex justify-center items-center w-[199.85px] h-[200.77px] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgimg})` }}
          >
            <img
              src={userlogo}
              alt="mask"
              className="w-[140.11px] h-[140.11px] object-contain"
            />
            </div>
          </div>
          <div className="flex mt-[30px]">
            <div className="flex flex-col items-center ">
              <div className="relative w-[55.2px] h-[55.2px] ">
                <img src={glasses} alt="" className="w-[42.93px] h-[27.6px] " />
                <img
                  src={tick}
                  alt=""
                  className="w-[21.47px] h-[21.47px] absolute top-[17px] left-[40px]  "
                />
              </div>
              <div className="text-[16px] font-normal text-gray-400 w-[139px] h-[42px] text-center">
                No glasses, face caps
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="relative w-[55.2px] h-[55.2px]">
                <img src={user} alt="" className="w-[31.65px] h-[39.26px] " />
                <img
                  src={tick}
                  alt=""
                  className="w-[21.47px] h-[21.47px] absolute top-[19px] left-[30px]  "
                />
              </div>
              <div className="text-[16px] font-normal text-gray-400 w-[139px] h-[42px] text-center">
                Your face within the frame
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="relative w-[55.2px] h-[55.2px]">
                <img src={bulb} alt="" className="w-[40.75px] h-[40.75px] " />
                <img
                  src={tick}
                  alt=""
                  className="w-[21.47px] h-[21.47px] absolute top-[24px] left-[27px]  "
                />
              </div>
              <div className="text-[16px] font-normal text-gray-400 w-[139px] h-[42px] text-center">
                Good lighting Environment
              </div>
            </div>
          </div>
     
          <button
            type="submit"
            className="bg-[#2880DA] text-white pt-[14px] pr-[24px] pb-[14px] pl-[24px]  w-[400px] h-[56px] rounded-[8px] font-semibold text-[18px] mt-[50px] "
          >
            Take Selfie
          </button>
        </div>
      </div>
    </div>
  );
};

export default Biometric;
