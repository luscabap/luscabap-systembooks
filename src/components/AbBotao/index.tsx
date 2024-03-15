import React from "react";
import styled, { css } from "styled-components";

export interface IAbBotaoProps {
    texto?: string,
    tipo?: 'primario' | 'secundario',
    onClick?: () => void
}

const BotaoEstilizado = styled.button<IAbBotaoProps>`
    background: ${(props: IAbBotaoProps) => props.tipo === 'primario' ? "#EB9B00" : '#FFF'};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${(props: IAbBotaoProps) => props.tipo === 'primario' ? '#FFF' : '#EB9B00'};
    font-size: 20px;
    cursor: pointer;
    ${(props: IAbBotaoProps) => props.tipo === 'primario' 
        ? css`    
            &:hover{
            background: #B87900;
            border: 2px solid #B87900;}
            color: #FFF;
        `
        : css`    
            &:hover{
            background: #FFF;
            border: 2px solid #B87900;}
            color: #B87900;
        `
    };
`

export const AbBotao = ({ texto, tipo = 'primario', onClick }: IAbBotaoProps) => {
    return (
        <BotaoEstilizado onClick={onClick} tipo={tipo}>
            {texto}
        </BotaoEstilizado>
    )
}