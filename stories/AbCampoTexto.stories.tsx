import React from "react";
import { AbCampoTexto, ICampoTextoProps } from '../src'
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Components/AbCampoTexto",
    component: AbCampoTexto
}as ComponentMeta<typeof AbCampoTexto>

const Template: ComponentStory<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args}/>

export const CampoTexto = Template.bind({});

CampoTexto.args = {
    titulo: "Titulo ABC",
    tipoInput: "text",
    placeholder: "oxeeeeeeeen"

} as ICampoTextoProps