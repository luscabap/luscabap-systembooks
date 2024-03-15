import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbCard } from '../src'

export default {
    title: "Components/AbCard",
    component: AbCard
} as ComponentMeta<typeof AbCard>

export const CardComponent = () => {
    return (
        <AbCard>
            <h1>Olá, sou um card!</h1>
        </AbCard>
    )
}