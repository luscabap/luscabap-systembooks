import React, { ReactNode } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    padding: 48px;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;

interface ICardProps {
    children: ReactNode
}

export const AbCard = ({children}: ICardProps) => {
    return (
        <CardContainer>
            {children}
        </CardContainer>
    )
}