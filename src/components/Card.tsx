import React from 'react'
import Image from 'next/image'
import { font } from '@/style/f'

type Props = {
    title: string,
    text: string
}

function Card({title, text}: Props) {
  return (
    <li className='w-[244px] shadow-[-1px_3px_16px_0px_#959DA530] h-[140px] flex p-[24px] flex-col justify-start'>
        <Image src="/Done.svg" className='mb-[16px]' width={24} height={24} alt="Done"/> 
        <p className={`mb-[8px] ${font(16,700,"#33384F",24)}`}>{title}</p>
        <p className={font(14,400,"#616B77",20)}>{text}</p>
    </li>
  )
}

export default Card