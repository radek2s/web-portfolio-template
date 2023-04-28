import Card from "@/layout/Card";
import { FC } from "react";
import Image from 'next/image';
import styles from './projectCard.module.scss'

interface ProjectData {
    name: string,
    stack: string[],
    description: string,
    demoUrl?: string
}

interface Props {
    imageSrc: string
    project: ProjectData
    variant?: 'left' | 'right'
}
export const ProjectCard: FC<Props> = ({ imageSrc, project: { name, stack, description, demoUrl }, variant = 'left' }) => {
    return (<div className={`${styles['project-wrapper']} ${styles[variant]}`}>
        <Card className={`${styles['project-wrapper--card']}`}>
            <p className={styles['project--stack']}>{stack.join(" - ")}</p>
            <h3 className={styles['project--title']}>{name}</h3>
            {description.split("\n").map((p, k) => <p className={styles['project--description']} key={k}>{p}</p>)}
            {demoUrl && (<button>Live demo</button>)}
        </Card>
        <Image className={`${styles['project-wrapper--image']}`} src={imageSrc} alt="Scada-LTS" sizes="100vw" width={0} height={0} />
    </div>)
}