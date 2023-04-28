import { FC } from "react";

interface CardProps {
    children?: React.ReactNode
    className?: string
}
export const Card: FC<CardProps> = ({children, className}) => {

    return (<div className={`card ${className}`}>
        {children}
    </div>)
}

export default Card