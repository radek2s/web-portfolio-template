import Card from "@/layout/Card";
import { FC } from "react";
import { ProjectData } from "./ProjectCard";
import { GitHubIcon } from "../icons/GitHub";
import { Icon } from "../icons";

export const SimpleProjectCard: FC<ProjectData> = ({ name, stack, description, demoUrl }) => {
    return (
        <Card className="strech">
            <h4>{name}</h4>
            <p className={'project--stack'}>{stack.join(" - ")}</p>
            {description.split("\n").map((p, k) => <p className={'project--description'} key={k}>{p}</p>)}
            <div className={''}>
                <Icon name="github" />
            </div>
        </Card>
    )
}