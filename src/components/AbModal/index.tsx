import React, { ReactNode } from "react";
import styled from "styled-components";

const ContainerModalStyled = styled.div`
    background-color: #FFF;
    width: 978px;
    height: 534px;
    border-radius: 24px;
    padding: 64px 48px 56px 48px;
    position: fixed;
    box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.15);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const FundoModal = styled.div`
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: rgba(101, 101, 101, 0.85);
`;

const TituloModalWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
    align-items: center;
`

const TituloModal = styled.h2`
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #EB9B00;
    margin: 0;
`;

const BotaoFecharModal = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: #002F52;
`

export interface IModalProps {
    children: ReactNode,
    titulo: string,
    aberta: boolean,
    aoFechar: () => void
}

export const AbModal = ({ children, titulo, aberta, aoFechar }: IModalProps) => {
    if (!aberta) {
        return <></>
    }

    return (
        <FundoModal>
            <ContainerModalStyled>
                <TituloModalWrapper>
                    <TituloModal>{titulo}</TituloModal>
                    <BotaoFecharModal onClick={aoFechar}>X</BotaoFecharModal>
                </TituloModalWrapper>
                {children}
            </ContainerModalStyled>
        </FundoModal>
    )
}