import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ContainerInputQuantidadeStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bolder;
    }
`;

const BotaoStyled = styled.button`
    background: #002F52;
    box-shadow: 0px 2px 4px rgba(19, 19, 19, 0.25);
    border: none;
    cursor: pointer;
    color: #FFF;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 0.5rem;
`;

export interface IAbInputQuantidade {
    titulo: string,
    onChange?: (value: number) => void
}

export const AbInputQuantidade = ({ titulo, onChange }: IAbInputQuantidade) => {
    const [value, setValue] = useState<number>(0);

    useEffect(() => {
        if (onChange) {
            onChange(Number(value))
        }
    }, [value]);

    return (
        <ContainerInputQuantidadeStyled>
            <label>{titulo}</label>
            <div>
                <BotaoStyled onClick={() => setValue(prevValue => prevValue + 1)}>
                    +
                </BotaoStyled>
                {value}
                <BotaoStyled onClick={() => setValue(prevValue => prevValue - 1)}>
                    -
                </BotaoStyled>
            </div>
        </ContainerInputQuantidadeStyled>
    )
}