"use client"
import { font } from '@/style/f'
import React from 'react'
import Card from './Card'

function Verification() {

    const CARDS = [
        {
            title: "Verification",
            text: "You verified your account"
        },
        {
            title: "Profile picture",
            text: "You added your profile picture"
        },
        {
            title: "Parents",
            text: "You added the parents"
        },
        {
            title: "Litter ",
            text: "Your created the litter"
        },
    ]

  return (
    <div className='h-[auto] w-[100%] flex flex-col bg-[#FFFFFF] border-[#F0F0F0] border-[1px]'>
        <div className='border-b-[1px] max-[965px]:flex-col max-[965px]:items-center max-[965px]:gap-[35px] flex-wrap p-[40px] border-[#F0F0F0] flex justify-between'>
            <hgroup className='leading-[24px] items-start max-[965px]:items-center flex flex-col gap-[16px]'>
                <h2 className='text-[20px] font-[600] text-[#5ACEE8] text-center'>You successfully complete your profile at Tipaw</h2>
                <p className='text-[16px] text-[#63637E] font-[400] text-center'>Now you can use Tipaw for 100% 🎉</p>
            </hgroup>
            <div className='flex flex-col justify-between'>
                <div className='flex gap-[145px] max-[450px]:gap-[40px]'>
                    <p className={font(18, 600, "#33384F", 24)}>Profile completed</p>
                    <p className={font(24, 700, "#03C9A9", 24)}>100%</p>
                </div>
                <div className='flex gap-[4px]'>
                    {
                        [1,2,3,4,5].map((index) => {
                            return <div key={index} className='w-[64px] max-[450px]:w-[20%] h-[8px] bg-[#03C9A9] rounded-[2px]'></div>
                        })
                    }
                </div>
            </div>
        </div>
        <div className='p-[40px]'>
            <ul className='flex flex-wrap justify-center gap-[32px]'>
                {CARDS.map((card, index) => <Card key={index} text={card.text} title={card.title}/>)}
            </ul>   
        </div>
    </div>
  )
}

export default Verification