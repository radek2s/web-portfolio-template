import { FC } from "react";

interface Props {
    text: string
    children: React.ReactNode
}
export const Tooltip: FC<Props> = ({ text, children }) => {
    return (<div className="tooltip">
        {children}
        <span className="tooltip--text">{text}</span>
    </div>)
}