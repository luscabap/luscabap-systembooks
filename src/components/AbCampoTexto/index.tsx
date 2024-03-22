import React from "react";
import styled from "styled-components";

export interface ICampoTextoProps {
    titulo: string,
    tipoInput: "text" | "email" | "password" | "date",
    placeholder: string,
    onChange: (value: string) => void;
};

const ContainerCampoTextoStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    label {
        color: #002F52;
        margin: 0 0 8px 16px;
    }

    input {
        border: 1px solid #002F52;
        border-radius: 45px;
        padding: 1rem;
        width: 500px;
        font-size: 16px;
        line-height: 24px;
        padding: 8px 24px;

        &:focus{
        outline: none;
    }
    }
`

export const AbCampoTexto = ({ titulo, tipoInput, placeholder }: ICampoTextoProps) => {
    return (
        <ContainerCampoTextoStyled>
            <label>{titulo}</label>
            <input type={tipoInput} placeholder={placeholder}/>
        </ContainerCampoTextoStyled>
    )
};