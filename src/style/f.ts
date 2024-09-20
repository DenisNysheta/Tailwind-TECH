// font-size, font-weight, text-color, leading

type font = [number, number, string, number]

export function font(...args: font) {
    return `text-[${args[0]}px] font-[${args[1]}] text-[${args[2]}] leading-[${args[3]}px]`
}