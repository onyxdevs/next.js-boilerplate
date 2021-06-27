import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export const Middle = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    width: 100%;
    justify-content: flex-start;
`;

export const Apod = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ApodButton = styled.div`
    margin-top: 2rem;
    background: #f9da2e;
    border-radius: 5px;
    padding: 5px 10px;
    font-family: Arial;
    font-weight: 700;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 0;
    cursor: pointer;
`;
