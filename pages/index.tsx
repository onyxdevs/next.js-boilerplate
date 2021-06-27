import * as React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

import { Container, Middle, Apod, ApodButton } from "@Styled/Home";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import { Heading } from "@Components";

import { IHomePage, ReduxNextPageContext } from "@Interfaces";

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = () => {
    const home = useSelector((state: IStore) => state.home);
    const dispatch = useDispatch();

    return (
        <Container>
            <Middle>
                <Heading text="Hello World" />
                <Apod>
                    <Link href="/test">
                        <ApodButton>Go to test page</ApodButton>
                    </Link>
                    <ApodButton
                        onClick={() => {
                            dispatch(
                                HomeActions.GetApod({
                                    params: { hd: false },
                                })
                            );
                        }}
                    >
                        Discover Space
                    </ApodButton>
                    <img
                        src={home.image.url}
                        height="300"
                        width="150"
                        alt="Discover Space"
                        style={{ marginTop: "3rem" }}
                    />
                </Apod>
            </Middle>
        </Container>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return { namespacesRequired: ["common"] };
};

export default Home;
