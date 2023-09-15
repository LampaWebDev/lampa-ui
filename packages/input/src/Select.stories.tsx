import type { Meta, StoryObj } from '@storybook/react';

import { SelectStyled } from './Select.styled';

type SelectComponent = typeof SelectStyled;

type Story = StoryObj<SelectComponent>;

const meta: Meta<SelectComponent> = {
	component: SelectStyled,
};

export const Primary: Story = {
	render: () => <SelectStyled />,
};

export default meta;
