import Card from "@/layout/Card";
import { FC } from "react";
import Image from 'next/image';
import styles from './projectCard.module.scss'
import { MOTION_DURATION_3, SlideUpWrapper } from "@/layout/animations/SlideUpWrapper";
import { Icon } from "../icons";

export interface ProjectData {
    name: string,
    stack: string[],
    description: string,
    repositoryUrl?: string
    demoUrl?: string
}

interface Props {
    imageSrc: string
    project: ProjectData
    variant?: 'left' | 'right'
}
export const ProjectCard: FC<Props> = ({ imageSrc, project: { name, stack, description, demoUrl, repositoryUrl }, variant = 'left' }) => {
    return (
        <SlideUpWrapper delay={MOTION_DURATION_3}>
            <div className={`${styles['project-wrapper']} ${styles[variant]}`}>
                <Card className={`${styles['project-wrapper--card']}`}>
                    <p className={styles['project--stack']}>{stack.join(" - ")}</p>
                    <h3 className={styles['project--title']}>{name}</h3>
                    {description.split("\n").map((p, k) => <p className={styles['project--description']} key={k}>{p}</p>)}
                    <div className={styles['project--actions']}>
                        {demoUrl && <a className="btn btn--primary" href={demoUrl}>Live demo</a>}
                        {repositoryUrl && <a href={repositoryUrl}><Icon name="github" /></a>}
                    </div>
                </Card>
                <Image className={`${styles['project-wrapper--image']}`} src={imageSrc} alt="Scada-LTS" sizes="100vw" width={0} height={0} />
            </div>
        </SlideUpWrapper>)
}