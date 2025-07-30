import React from "react";
import "../index.css";
import signin from "../assets/signin.jpg";
import btnimg from "../assets/Fill 25.png";
import google from "../assets/google 1.jpg";
import userphoto from "../assets/Avatar.jpg";
import facebook from "../assets/facebook 1.jpg";
import apple from "../assets/path4.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
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
                Add more details
            </div>
            <div className=" mt-[45px]">
               <div className="w-[98px] h-[98px] ">
                    <img src={userphoto} alt="" />
               </div>
               <div className="w-[99px] h-[42px] font-normal text-[14px] text-[#5A5A5A] mt-[9px] text-center">
                    Upload Profile photo
               </div>
            </div>
              <div className="mt-[24px] flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-bold text-[16px] text-[#11142D]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="input your email here"
                className="border-1 border-[#E2E2E2] rounded-[12px] w-[400px] h-[56px] pt-[18px] pr-[24px] pb-[19px] pl-[24px]  "
              />
            </div>
              <div className="mt-[24px] flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-bold text-[16px] text-[#11142D]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="input your password here"
                className="border-1 border-[#E2E2E2] rounded-[12px] w-[400px] h-[56px] pt-[18px] pr-[24px] pb-[19px] pl-[24px]  "
              />
            </div>
              <div className="mt-[24px] flex flex-col gap-2">
              <label
                htmlFor="confirmpassword"
                className="font-bold text-[16px] text-[#11142D]"
              >
               Confirm Password
              </label>
              <input
                type="password"
                id="confirmpassword"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="input your confirm password here"
                className="border-1 border-[#E2E2E2] rounded-[12px] w-[400px] h-[56px] pt-[18px] pr-[24px] pb-[19px] pl-[24px]  "
              />
            </div>
             <button
              type="submit"
              className="bg-[#2880DA] text-white pt-[14px] pr-[24px] pb-[14px] pl-[24px]  w-[400px] h-[56px] rounded-[8px] font-semibold text-[18px] mt-[40px] "
            >
              Next
            </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
