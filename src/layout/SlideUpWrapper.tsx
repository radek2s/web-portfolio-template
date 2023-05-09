import { FC, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const MOTION_DURATION_3 = 0.3
const TRANSLATE_SHIFT = 25

function wrapperVariants(delay: number = 0, duration = MOTION_DURATION_3) {
    return {
        visible: { opacity: 1, transition: { delay, delayChildren: delay, staggerChildren: duration } },
        hidden: { opacity: 0 }
    }
}

function childVariants() {
    return {
        visible: { opacity: 1, y: 0, transition: { duration: MOTION_DURATION_3, ease: "easeOut" } },
        hidden: { opacity: 0, y: TRANSLATE_SHIFT }
    }
}

interface Props {
    delay?: number
    duration?: number
    className?: string
    children: React.ReactNode[] | React.ReactNode
}
export const SlideUpWrapper: FC<Props> = ({ children, className, delay = 0, duration = MOTION_DURATION_3 }) => {
    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])
    return (
        <motion.div
            ref={ref}
            animate={controls}
            variants={wrapperVariants(delay, duration)}
            initial="hidden"
            className={className}
        >
            {Array.isArray(children) ? (<>
                {children.map((item, idx) =>
                    <motion.div
                        variants={childVariants()}
                        key={idx}
                    >{item}
                    </motion.div>
                )}
            </>) : (<>
                {children}
            </>)}

        </motion.div>
    )
}