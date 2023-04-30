import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode
}
export const SectionWrapper: FC<Props> = ({ children }) => {

    return <div className="app-section">
        {children}
    </div>

}