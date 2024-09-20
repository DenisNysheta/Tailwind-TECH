"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import UserImg from "./UserImg.svg"

type Props = {}

function Header({}: Props) {

    const [active, setActive] = useState({burger: false, language: "Fr", menuUser: false})
    const STYLELANGUAGES = "cursor-pointer transition-colors duration-500 select-none ease text-[14px] leading-[16px] font-OpenSans"

  return (
    <header className='px-[24px] flex items-center justify-between h-[72px] shadow-[0px_1px_0px_0px_#F0F0F0]'>
        <h1 className='text-[18px] leading-[24px] text-[#20253F] font-[600]'>My Tipaw</h1>
        <div style={{top: active.burger ? "-15px" : "-160px"}} className='tablet:flex transition-all duration-[.2s] ease-linear max-[768px]:bg-[#2e4f4fa3] max-[768px]:absolute max-[768px]:p-[20px] rounded-[20px] top-[-15px] max-[768px]:flex max-[768px]:items-center max-[768px]:flex-col gap-[20px] items-center'>
            <div className='relative flex gap-[20px] after:top-[7px] font-[700] after:content-[""] after:absolute after:left-[48%] after:block after:h-[4px] after:w-[4px] after:rounded-[20px] after:bg-[#81DBEF]'>
                <p onClick={() => setActive({...active, language: "Fr"})} style={{color: active.language === "Fr" ? "#5ACEE8" : "#616B77"}} className={STYLELANGUAGES}>
                    Fr
                </p>
                <p onClick={() => setActive({...active, language: "NI"})} style={{color: active.language === "NI" ? "#5ACEE8" : "#616B77"}} className={STYLELANGUAGES}>
                    NI
                </p>
            </div>
            <div className='cursor-pointer'>
                <Image src="/Bell.svg" width={20} height={20} alt='Bell message'/>
            </div>
            <div onClick={() => setActive({...active, menuUser: !active.menuUser})} className='select-none cursor-pointer flex items-center justify-between gap-[16px]'>
                <div>
                    <Image src="./UserImg.svg" width={40} height={40} alt='User image' />
                </div>
                <p className='text-[14px] leading-[24px] font-[600] text-[#616B77]'>
                    John Smith
                </p>
                <div style={{transform: active.menuUser ? "rotate(315deg)" : "rotate(135deg)", top: active.menuUser ? "3px" : "-3px"}} className='transition-all duration-500 ease border-t-[2px] border-r-[2px] relative  border-[#616B77] w-[12px] h-[12px] rotate-[135deg]'>
                </div>
            </div>
        </div>
        <div onClick={() => setActive({...active, burger: !active.burger})} className='cursor-pointer relative max-[768px]:flex hidden flex-col justify-between w-[50px] h-[35px]'>
            <span style={{transform: active.burger ? "rotate(35deg)" : "rotate(0deg)"}} className='w-[100%] transition-transform duration-500 ease rounded-[20px] h-[5px] bg-[#616B77] block'></span>
            <span style={{transform: active.burger ? "rotate(35deg)" : "rotate(0deg)"}} className='w-[100%] transition-transform duration-500 ease rounded-[20px] h-[5px] bg-[#616B77] block'></span>
            <span style={{transform: active.burger ? "rotate(35deg)" : "rotate(0deg)"}} className='w-[100%] transition-transform duration-500 ease rounded-[20px] h-[5px] bg-[#616B77] block'></span>
        </div>
    </header>
  )
} 

export default Header