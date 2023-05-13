import { FC } from "react";

type TooltipPosition = 'bottom' | 'right'
interface Props {
    text: string
    children: React.ReactNode
    position?: TooltipPosition
}
export const Tooltip: FC<Props> = ({ text, children, position = 'bottom' }) => {
    return (<div className="tooltip">
        {children}
        <span className={`tooltip--text ${position}`}>{text}</span>
    </div>)
}