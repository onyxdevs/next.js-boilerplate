import * as React from "react";
import { NextPage } from "next";
import Link from "next/link";

import { Container, Middle, Apod, ApodButton } from "@Styled/Home";
import { Heading } from "@Components";

import { IHomePage } from "@Interfaces";

const Test: NextPage<IHomePage.IProps, IHomePage.InitialProps> = () => {
    return (
        <Container>
            <Middle>
                <Heading text="Test" />
                <Apod>
                    <Link href="/">
                        <ApodButton>Go back home</ApodButton>
                    </Link>
                </Apod>
            </Middle>
        </Container>
    );
};

export default Test;
