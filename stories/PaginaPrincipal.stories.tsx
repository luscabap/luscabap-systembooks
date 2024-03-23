import React from "react";
import { PaginaPrincipal } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: "Pages/PaginaPrincipal",
    component: PaginaPrincipal
} as ComponentMeta<typeof PaginaPrincipal>;

const Template: ComponentStory<typeof PaginaPrincipal> = () => <PaginaPrincipal />

export const Pagina = Template.bind({});