import { Store } from "redux";
import { AppInitialProps } from "next/app";
import { NextPageContext } from "next";
import { ThunkDispatch } from "redux-thunk";

interface AppStore extends Store {
    dispatch: ThunkDispatch;
}

export interface AppWithStore extends AppInitialProps {
    store: AppStore;
}

export interface ReduxNextPageContext extends NextPageContext {
    store: AppStore;
}
