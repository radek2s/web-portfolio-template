import Card from "@/layout/Card";
import { FC } from "react";
import { ProjectData } from "./ProjectCard";
import { Icon } from "../icons";
import styles from './projectCardSimple.module.scss'

export const SimpleProjectCard: FC<ProjectData> = ({ name, stack, description, demoUrl, repositoryUrl }) => {
    return (
        <Card className={styles['simple-project-card']}>
            <h4>{name}</h4>
            <p className={styles['project--stack']}>{stack.join(" - ")}</p>
            {description.split("\n").map((p, k) => <p className={styles['project--description']} key={k}>{p}</p>)}
            <div className={styles['project--actions']}>
                {/* TODO: Add tooltips */}
                {repositoryUrl && <a href={repositoryUrl}><Icon name="github" /></a>}
                {demoUrl && <a href={demoUrl}><Icon name="open" /></a>}
            </div>

        </Card>
    )
}