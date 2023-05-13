import { FC } from "react";
import { SectionWrapper } from "@/layout/SectionWrapper";
import { SlideUpWrapper } from "@/layout/animations/SlideUpWrapper";

import { ProjectCardSimple } from "./card";
import styles from './otherProjects.module.scss';

export const OtherProjects: FC = () => {
    return <SectionWrapper>
        <div className="content-section">
            <h2 className="text-right">Other projects</h2>

            <div>
                <SlideUpWrapper className={styles['projects-wrapper']}>
                    <ProjectCardSimple
                        name="Karcioszki the Game"
                        stack={["ANGULAR", "TypeScript", "JAVA", "SPRING", "WEBSOCKETS"]}
                        description="Game inspired by board game called 'Codenames'. Using Java server we can create our card packages and host own game. Players can join using their phones, tables or personal computers just using web browser. After the team is assembled every action is in real-time shared with all your friends."
                        repositoryUrl="https://github.com/radek2s/KarcioszkiGame"
                    />

                    <ProjectCardSimple
                        name="DA Kraków"
                        stack={["WordPress", "JavaScript", "CSS"]}
                        description="Web Page for academic chaplaincy of st. Anna in Kraków. I was responsible for design and develop the page layout and to ensure that further page maintenance will be easy\nThis page has been created in 2017 and its design unchanged from this time"
                        demoUrl="https://da-krakow.pl/"
                    />

                    <ProjectCardSimple
                        name="Company People Management"
                        stack={["Angular", "PWA", "IndexedDB"]}
                        description="Application where you can manage Human Resources within your company. Build as Progressive Web Application which allows user to launch it without access to the web. What is more it can use internal browser database (IndexedDB) to store your data."
                        repositoryUrl="https://github.com/radek2s/Company-People-Management"
                    />

                    <ProjectCardSimple
                        name="Learning Survey"
                        stack={["Angular", "Electron", "Firebase"]}
                        description="Electron application created for a private request. The main principle of operation of the application is based on the monitoring the learnign process and track user behaviour. At the end there is an exam where we can detect user answer change and save that to final report. Report is saved into Firebase"
                    />

                    <ProjectCardSimple
                        name="Spływ 100-lecia"
                        stack={["Angular", "Typescript", "SCSS"]}
                        description="Web Page for event called 'Spływ 100-lecia' that was an tribute for Pope John Paul II. It is a Single Page Application more like landing page where users can find latest announcments related to this event."
                        demoUrl="https://splyw100lecia.pl/"
                    />

                    <ProjectCardSimple
                        name="Scada Reforged"
                        stack={["Kotlin", "Angular", "Docker"]}
                        description="This is a concept project that is basing on Scada-LTS and its goal is to propose better architectural design. Original application lack of scalability, manageability and traceability. In this project I was trying to decouple old monolith code into several micro-services that can be easily modified and managed."
                        repositoryUrl="https://github.com/radek2s/Scada-Reforged"
                    />
                </SlideUpWrapper>

            </div>

        </div>

    </SectionWrapper>
}