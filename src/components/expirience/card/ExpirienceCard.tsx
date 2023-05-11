import { FC, useState } from "react";
import { Icon, IconName } from "@/components/icons";
import Card from "@/layout/Card";
import styles from './expirienceCard.module.scss'

interface Props {
    icon: IconName
    title: string
    timeline: string
    children?: React.ReactNode
}
export const ExpirienceCard: FC<Props> = ({ icon, title, timeline, children }) => {
    const [isOpened, setOpened] = useState<boolean>(false)

    return (<Card className={styles['card']}>
        <header>
            <Icon name={icon} className={styles['header-icon']} />
            <span className={styles['header-title']}>{title}</span>
            <span className={styles['header-time']}>{timeline}</span>
            <div
                className={`${styles['header-toggle']} ${isOpened ? styles['active'] : ''}`}
                onClick={() => setOpened(opened => !opened)}
            >
                <Icon name="caret-down" />
            </div>
        </header>
        {isOpened && (<section className={styles['section-wrapper']}>
            {children}
        </section>)}
    </Card>)
}