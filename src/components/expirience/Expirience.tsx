import { FC } from "react";
import Card from "../../layout/Card";
import styles from './Expirience.module.scss'
import { SectionWrapper } from "@/layout/SectionWrapper";

export const Expirience: FC = () => {
    return (
        <SectionWrapper><div className="content-section">
            <h2 className="text-right">Professional expirience</h2>
            <div className={styles['expirience-timeline']}>
                <Card className="spacer">
                    <span>
                        Full-Stack Developer @ Nivalit Sp. z o.o.
                    </span>
                    <span>
                        2022 - present
                    </span>
                </Card>

                <Card className="spacer">
                    <span>
                        Full-Stack Developer @ SoftQ Sp. z o.o.
                    </span>
                    <span>
                        2021 - 2022
                    </span>
                </Card>

                <Card className="spacer">
                    <span>
                        MSc in Telecommunications @ AGH UST Kraków
                    </span>
                    <span>
                        2021
                    </span>
                </Card>
            </div>
        </div>
        </SectionWrapper>
    )
}