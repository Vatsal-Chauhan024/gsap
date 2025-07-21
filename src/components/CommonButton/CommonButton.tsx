import type { HtmlHTMLAttributes } from "react"

interface CommonButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    className?: string
    text: string
}

const CommonButton = ({ className, text, ...props }: CommonButtonProps) => {
    return (
        <button className={className} {...props}>
            {text}
        </button>
    )
}

export default CommonButton