import { FC } from "react";
import Image from 'next/image';

import Card from "@/layout/Card";
import { MOTION_DURATION_3, SlideUpWrapper } from "@/layout/animations/SlideUpWrapper";

import { Icon } from "../../icons";
import { ProjectData } from "./model";
import styles from './projectCard.module.scss'

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
                        {demoUrl && <a className="btn btn--primary" href={demoUrl} target="_blank">Live demo</a>}
                        {repositoryUrl && <a href={repositoryUrl} target="_blank"><Icon name="github" /></a>}
                    </div>
                </Card>
                <Image className={`${styles['project-wrapper--image']}`} src={imageSrc} alt="Scada-LTS" sizes="100vw" width={0} height={0} />
            </div>
        </SlideUpWrapper>)
}

export default ProjectCard