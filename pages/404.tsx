import * as React from "react";
import { NextPage } from "next";
import Link from "next/link";

import { Container, ApodButton } from "@Styled/Home";
import { Heading } from "@Components";

import { IErrorPage } from "@Interfaces";

const Custom404: NextPage<IErrorPage.IProps> = () => {
    return (
        <Container>
            <Heading text="Not Found" />
            <Link href="/">
                <ApodButton>Back Home</ApodButton>
            </Link>
        </Container>
    );
};

export default Custom404;
