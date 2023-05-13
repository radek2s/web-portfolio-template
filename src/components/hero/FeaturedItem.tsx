import { AnimatedCounter } from "@/layout/animations/AnimatedCounter";
import { FC } from "react";
import styles from './hero.module.scss'

const COUNTER_ANIMATION_DURATION = 0.3

interface Props {
    result: number
    name: string
    delay: number
}
export const FeaturedItem: FC<Props> = ({ result, name, delay }) => {
    return (<div className={styles['featured-item']}>
        <span className={styles['featured-item--value']}><AnimatedCounter to={result} duration={COUNTER_ANIMATION_DURATION} delay={delay} /></span>
        <span>{name.split("\\n").map((text, i) => <span key={i}><span>{text}</span><br /></span>)}</span>
    </div>)

}