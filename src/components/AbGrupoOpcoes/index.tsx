import React from "react";
import styled from "styled-components";

const ContainerEstilizado = styled.section<{ selecionado: boolean }>`
    width: 194px;
    height: 88px;
    border: 1px solid;
    border-color: ${props => props.selecionado ? '#002F52' : '#EB9B00'};
    border-radius: 8px;
    padding: 8px 0 8px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: sans-serif;
    margin: 10px;
    background: ${props => props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);' : '#FFF'};
    cursor: pointer;

    header {
        color: ${props => props.selecionado ? '#FFF' : '#EB9B00'};
        font-size: 12px;
        font-weight: 400;
    }

    strong {
        color: ${props => props.selecionado ? '#FFF' : '#EB9B00'};
        font-size: 16px;
        font-weight: 700;
    }

    footer{
        color: ${props => props.selecionado ? '#FFF' : '#0000008A'};
        font-size: 12px;
        font-weight: 400;
    }
`;

export interface IAbGrupoOpcao {
    id: number,
    titulo: string,
    corpo: string,
    rodape: string
}

export interface IAbGrupoOpcoesProps {
    opcoes: IAbGrupoOpcao[]
}

export const AbGrupoOpcoes = ({ opcoes }: IAbGrupoOpcoesProps) => {
    return (
        <>
            {opcoes.map(opcao => 
                <ContainerEstilizado key={opcao.id} selecionado={false}>
                <header>
                    {opcao.titulo}
                </header>
                <div>
                    <strong>{opcao.corpo}</strong>
                </div>
                <footer>
                    {opcao.rodape}
                </footer>
            </ContainerEstilizado>
            )}
        </>
    )
}