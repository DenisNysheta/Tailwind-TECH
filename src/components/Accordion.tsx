"use client"
import { font } from '@/style/f'
import Image from 'next/image'
import React, { useState } from 'react'

function Accordion() {

    const [active, setActive] = useState(false)

  return (
    <div className='h-[auto] w-[100%] p-[40px] flex flex-col bg-[#FFFFFF] border-[#F0F0F0] border-[1px]'>
        <h2 className={`${font(18, 600, "#5ACEE8", 24)} relative after:content-[""] after:block flex items-center gap-[16px] after:w-[10px] after:h-[10px] after:bg-[#FF453E] after:rounded-[20px]`}>Announcements from Tipaw</h2>
        <div className='w-[100%] h-[auto] rounded-[8px] border-[1px] border-[#5ACEE8]'>
            <h3 onClick={() => setActive(!active)} className={`p-[12px_24px] cursor-pointer justify-between flex relative bg-[#5ACEE8] rounded-t-[8px] text-white ${font(16,700, "",24)}`}>
                What is Tipaw?
                <div onClick={() => setActive(!active)} style={{transform: active ? "rotate(135deg)" : "rotate(315deg)", top: active ? "0px" : "5px"}} className='w-[15px] h-[15px] relative transition-all duration-500 ease border-t-[2px] border-r-[2px] border-white'></div>
            </h3>
            <div className='flex flex-col items-start p-[16px_24px] gap-[16px]'>
                <time className={`flex text-[12px] ${font(12, 400, "#5ACEE8", 16)}`} dateTime='2024-01-24'>
                    <Image src="/Calendar.svg" width={16} height={16} alt="Calendar"/>
                    24 January
                </time>
                {active ? 
                <p>
                    Lorem ipsum dolor sit amet consectetur. Etiam sed non id ultrices tempor. Consectetur pharetra lorem vivamus eros bibendum. Sit augue adipiscing adipiscing est massa non neque pretium metus. Consequat posuere nullam eleifend viverra pellentesque sed quis. Nunc non aenean leo lacinia etiam enim. Turpis gravida in ornare habitant volutpat. Imperdiet est ut et magna amet tortor tortor. Pulvinar suspendisse volutpat gravida placerat posuere feugiat erat ut. Aliquam facilisis ornare egestas mi. Molestie mauris aliquet dolor accumsan malesuada nam ac enim. Praesent ut elit aliquam nunc.
                </p> : null
                }
            </div>
        </div>
    </div>
  )
}

export default Accordion