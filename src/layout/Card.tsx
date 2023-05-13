import { FC, useEffect, useRef, useState } from "react";

interface CardProps {
    children?: React.ReactNode
    className?: string
    disableHover?: boolean
}
export const Card: FC<CardProps> = ({ children, className, disableHover = false }) => {

    const divRef = useRef<HTMLDivElement>(null)
    const [activeClass, setActiveClass] = useState<'hover' | ''>('')

    const getMouseCords = (e: React.MouseEvent) => {
        if (disableHover) return
        const x = e.pageX - (divRef.current?.offsetLeft || 0)
        const y = e.pageY - (divRef.current?.offsetTop || 0)
        document.documentElement.style.setProperty("--x", `${x}px`)
        document.documentElement.style.setProperty("--y", `${y}px`)
    }

    const handleSetClass = (activeClass: 'hover' | '') => {
        if (disableHover) return
        setActiveClass(activeClass)
    }


    return (<div
        ref={divRef}
        className={`card ${className} ${activeClass}`}
        onMouseMove={getMouseCords}
        onMouseEnter={() => handleSetClass('hover')}
        onMouseLeave={() => handleSetClass('')}
    >
        {children}
        {activeClass === 'hover' && <div className="hover-light" />}
    </div>)
}

export default Card