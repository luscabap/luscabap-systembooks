import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbInputQuantidade, IAbInputQuantidade } from '../src';

export default {
    title: "Components/AbInputQuantidade",
    component: AbInputQuantidade
} as ComponentMeta<typeof AbInputQuantidade>

const Template: ComponentStory<typeof AbInputQuantidade> = (args) => <AbInputQuantidade {...args}/>

export const Input = Template.bind({});

Input.args = {
    titulo: "Input de qualidade"
} as IAbInputQuantidade