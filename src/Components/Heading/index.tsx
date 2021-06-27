import * as React from "react";

import styles from "./Heading.module.scss";

import { IHeading } from "./Heading";

const Heading: React.FunctionComponent<IHeading.IProps> = (
    props
): JSX.Element => {
    const { text } = props;

    return (
        <div className={styles.title}>
            <span className={styles.title__front}>{text}</span>
        </div>
    );
};

export { Heading };
