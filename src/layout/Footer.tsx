import { Icon } from "@/components/icons";
import { FC } from "react";
import styles from '@/styles/Footer.module.scss'

export const Footer: FC = () => {
    return (
        <footer>
            <div className={styles['page-footer']}>
                <div className={styles['page-footer--links']}>
                    <Icon name="github" />
                    <Icon name="linked-in" />
                </div>
                <p>Designed & build by Radosław Jajko 2023</p>
            </div>
        </footer>
    )
}