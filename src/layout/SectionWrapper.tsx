import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode
    variant?: 'default' | 'end' | 'start'
    className?: string
}
export const SectionWrapper: FC<Props> = ({ children, variant = 'default', className = '' }) => {

    return <div className={`app-section ${variant} ${className}`}>
        {children}
    </div>

}