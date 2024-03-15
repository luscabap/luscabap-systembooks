import React from "react";
import styled from "styled-components";

export interface IAbTagProps {
    texto: string
}

const TagContainer = styled.div`
    background-color: #EB9B00;
    padding: 48px;
    color: #FFF;
    font-weight: bolder;
    font-size: 24px;
    display: inline-block;
`

export const AbTag = ({texto}: IAbTagProps) => {
    return (
        <TagContainer>
            {texto}
        </TagContainer>
    )
}