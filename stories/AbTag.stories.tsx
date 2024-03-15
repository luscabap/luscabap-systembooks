import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbTag, IAbTagProps } from "../src";

export default {
    title: "Components/AbTag",
    component: AbTag
} as ComponentMeta<typeof AbTag>

const Template: ComponentStory<typeof AbTag> = (args) => <AbTag {...args}/>

export const Tag = Template.bind({})
Tag.args = {
    texto: "Olá mundo"
} as IAbTagProps