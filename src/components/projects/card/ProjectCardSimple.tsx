import { FC } from "react";
import Card from "@/layout/Card";
import { Tooltip } from "@/layout/Tooltip";
import { Icon } from "../../icons";

import { ProjectData } from "./model";
import styles from './projectCardSimple.module.scss'

export const ProjectCardSimple: FC<ProjectData> = ({ name, stack, description, demoUrl, repositoryUrl }) => {
    return (
        <Card className={styles['simple-project-card']}>
            <h4>{name}</h4>
            <p className={styles['project--stack']}>{stack.join(" - ")}</p>
            {description.split("\\n").map((p, k) =>
                <p className={styles['project--description']} key={k}>{p}</p>
            )}
            <div className={styles['project--actions']}>
                {repositoryUrl &&
                    <Tooltip text="Open in GitHub" position="right">
                        <a href={repositoryUrl} target="_blank"><Icon name="github" /></a>
                    </Tooltip>
                }
                {demoUrl &&
                    <Tooltip text="Open project" position="right">
                        <a href={demoUrl} target="_blank"><Icon name="open" /></a>
                    </Tooltip>
                }
            </div>

        </Card>
    )
}

export default ProjectCardSimple