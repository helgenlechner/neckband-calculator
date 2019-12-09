import React from 'react';
// add component to test
import { ShapeSelector } from './shapeSelector';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
// import react-testing methods
import { render, fireEvent } from '@testing-library/react';

describe('ShapeSelector Component', () => {
    it('should mark the button for the selectedShape as selected', () => {
        const onShapeChange = jest.fn(shape => undefined);

        const { getByTestId } = render(
            <ShapeSelector
                selectedShape="ellipse"
                onShapeChange={onShapeChange}
            />,
        );

        expect(getByTestId('shape-ellipse')).toHaveAttribute('data-selected', 'true');

        expect(getByTestId('shape-circle')).toHaveAttribute('data-selected', 'false');
    });

    it('should call onShapeChange when clicking a button', () => {
        const onShapeChange = jest.fn(shape => undefined);

        const { getByTestId } = render(
            <ShapeSelector
                selectedShape="circle"
                onShapeChange={onShapeChange}
            />,
        );

        fireEvent.click(getByTestId('shape-ellipse'));

        expect(onShapeChange).toHaveBeenCalledTimes(1);
        expect(onShapeChange).toHaveBeenCalledWith('ellipse');
    });

    it('should not call onShapeChange when the button is selected', () => {
        const onShapeChange = jest.fn(shape => undefined);

        const { getByTestId } = render(
            <ShapeSelector
                selectedShape="ellipse"
                onShapeChange={onShapeChange}
            />,
        );

        fireEvent.click(getByTestId('shape-ellipse'));

        expect(onShapeChange).toHaveBeenCalledTimes(0);
    });
});
