// font-size, font-weight, text-color, leading
export function font(...args: any) {
    return `text-[${args[0]}px] font-[${args[1]}] text-[${args[2]}] leading-[${args[3]}px]`
}