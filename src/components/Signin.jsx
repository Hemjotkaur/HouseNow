import React from "react";
import "../index.css";
import signin from "../assets/signin.jpg";
import btnimg from "../assets/Fill 25.png";
import google from "../assets/google 1.jpg";
import facebook from "../assets/facebook 1.jpg";
import apple from "../assets/path4.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Signin = () => {
  let [number, setPhoneNumber] = useState("");
  let [password, setPassword] = useState("");

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
          <p className="text-white text-[55px] font-bold">Welcome Back!</p>
          <p className="text-white text-[19px] font-normal  mt-[16px] w-[464px] h-[69px]">
            Enter your registered email and password to <br /> manage your
            Dashboard, track your Leads, and <br /> enjoy benefits.
          </p>
        </div>
      </div>

      <div className="w-[666px] h-[783px] bg-white">
        <nav className="flex justify-end mt-[28px] gap-9 mr-[106px]">
          <div className="w-[54px] h-[24px] font-semibold text-[15px] text-[#565656] ">
            <Link to="/signup">Signup</Link>
          </div>
          <div className="font-semibold text-[15px] text-[#2880DA] ">
            Signin
          </div>
        </nav>
        <div className="w-[666px]  border-2 border-[#E9F1FB]"></div>

        <div className="flex flex-col justify-center items-center mt-[60px]">
          <div className="text-center  font-bold text-[35px] text-[#11142D] mr-[47px]">
            Signin to <span className="font-extrabold">HouseNow</span>
          </div>
          <form action="" className="">
            <div className="mt-[16px] flex flex-col gap-2">
              <label
                htmlFor="Phone"
                className="font-bold text-[16px] text-[#11142D]"
              >
                Phone
              </label>
              <input
                type="number"
                id="number"
                value={number}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                placeholder="input your phone number here"
                className="border-1 border-[#E2E2E2] rounded-[12px] w-[400px] h-[56px] pt-[18px] pr-[24px] pb-[19px] pl-[24px] "
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
            <div className="mt-[30px] flex gap-[147px]">
              <label className="flex items-center space-x-2">
                <div className="w-[40px] h-[20px] rounded-[36.5px] bg-[#ECECEC] border-[0.5px] border-[#C9C9C9] relative">
                  <div className="w-[16px] h-[16px] rounded-[12px] bg-white absolute "></div>
                </div>
                <span className="text-[#1A1A1A] text-[12px] font-normal ">
                  Remember me
                </span>
              </label>
              <div className="text-[15px] text-[#0606DA] font-semibold ">
                Forgot password?
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#2880DA] text-white pt-[14px] pr-[24px] pb-[14px] pl-[24px]  w-[400px] h-[56px] rounded-[8px] font-semibold text-[18px] mt-[40px] "
              onClick={HandleSubmit}
            >
              Sign in
            </button>
          </form>

          <div className="flex items-center justify-center gap-[11px]">
            <div className="w-[130px] border-1 border-[#DBDBDB] mt-[44.5px]"></div>
            <div className="w-[107px] h-[15px] text-[13px] font-normal mt-[35px]">
              Or continue with
            </div>
            <div className="w-[130px] border-1 border-[#DBDBDB] mt-[44.5px]"></div>
          </div>

          <div className="flex gap-[9px]">
            <div className=" flex gap-[8px] justify-center items-center w-[126px] h-[43px] rounded-[5px] border-[1px] border-[#E8E8E8] mt-[36.5px]">
              <div className="w-[22px] h-[22px]">
                <img src={google} alt="" />
              </div>
              <div className="text-[12px] font-medium">Google</div>
            </div>
              <div className=" flex gap-[8px] justify-center items-center w-[126px] h-[43px] rounded-[5px] border-[1px] border-[#E8E8E8] mt-[36.5px]">
              <div className="w-[26px] h-[26px]">
                <img src={facebook} alt="" />
              </div>
              <div className="text-[12px] font-medium">Facebook</div>
            </div>
              <div className=" flex gap-[8px] justify-center items-center w-[126px] h-[43px] rounded-[5px] border-[1px] border-[#E8E8E8] mt-[36.5px]">
              <div className="w-[19.37px] h-[23px]">
                <img src={apple} alt="" />
              </div>
              <div className="text-[12px] font-medium">Apple</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
