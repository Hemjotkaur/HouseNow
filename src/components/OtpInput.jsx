import React, { useEffect } from 'react'
import { useState,useRef } from 'react';

const OtpInput = ({onOtpSubmit = () => {}}) => {

    const [otp, setOtp] = useState(["","","","","",""]);
    const inputRefs = useRef([]);
    // console.log(inputRefs)

    useEffect(()=> {
        if(inputRefs.current[0]) {
            inputRefs.current[0].focus()
        }
    }, [])
    
    const handleChange =(e,index) => {
        const value = e.target.value;
        // console.log(value)
        if (isNaN(value)) return;

        const newOtp = [...otp];
        //allow only one input
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);
        // console.log(newOtp);
        const combinedOtp = newOtp.join("");
        if(combinedOtp.length === 6 ) onOtpSubmit(combinedOtp)
        // console.log(combinedOtp)
        
        // Move to next input if current field is filled
        if(value && index <5 && inputRefs.current[index+1]) {
            inputRefs.current[index+1].focus();
        }
    };
    const handleClick =() => {};
    const handleKeyDown =() => {};

  return <div className='flex gap-4 mt-[40px] '>
    {
        otp.map((value,index) => {
            return (
                <input
                    key={index}
                    type="text"
                    ref={(input)=>(inputRefs.current[index] = input)}
                    value={value}
                    onChange={(e)=> handleChange(e, index)}
                    onClick={handleClick(index)}
                    onKeyDown={(e)=>handleKeyDown(e,index)}
                    className='w-[54px] h-[53px] rounded-[10px] text-center no-spinner  border-2 border-[#C5C5C5] outline-[#2880DA]'
                />
            );
        })
    }
  </div>
}

export default OtpInput
