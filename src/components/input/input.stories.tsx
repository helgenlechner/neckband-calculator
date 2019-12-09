import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Input } from './input';

export default {
    title: 'Input',
    component: Input,
};

export const withText = () => (
    <Input
        label="A Label"
        onValueChange={action('value change')}
        testId="label"
    />
);

export const withKnobs = () => (
    <Input
        label={text('Label', 'A Label')}
        onValueChange={action('value change')}
        testId="knobs"
    />
);
