/* eslint-disable react-hooks/exhaustive-deps */
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { FC, useEffect, useRef } from "react"

interface Props {
    to: number
    from?: number
    duration?: number
    delay?: number
}
/**
 * Animated Counter Component
 * 
 * Perform number up animation.
 */
export const AnimatedCounter: FC<Props> = ({ to, from = 0, duration = 2, delay = 0 }) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView) {
            animate(count, to, { duration, delay });
        }
    }, [count, inView, to]);

    return <motion.span ref={ref}>{rounded}</motion.span>;

}