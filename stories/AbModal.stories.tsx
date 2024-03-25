import React from "react";
import { AbModal } from "../src";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Components/AbModal",
    component: AbModal
} as ComponentMeta<typeof AbModal>

const Template: ComponentStory<typeof AbModal> = (args) => <AbModal {...args}/>

export const Modal = Template.bind({})