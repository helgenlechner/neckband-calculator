import React from 'react';
import { action } from '@storybook/addon-actions';
import { ShapeSelector } from './shapeSelector';

export default {
    title: 'Shape Selector',
    component: ShapeSelector,
};

export const withCircleSelected = () => (
    <ShapeSelector
        selectedShape="circle"
        onShapeChange={action('shape change')}
    />
);

export const withEllipseSelected = () => (
    <ShapeSelector
        selectedShape="ellipse"
        onShapeChange={action('shape change')}
    />
);
