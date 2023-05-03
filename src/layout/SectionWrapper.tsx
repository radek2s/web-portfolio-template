import { FC, ReactNode } from "react";

interface Props {
    variant?: 'default' | 'end' | 'start'
    children: ReactNode
}
export const SectionWrapper: FC<Props> = ({ children, variant = 'default' }) => {

    return <div className={`app-section ${variant}`}>
        {children}
    </div>

}