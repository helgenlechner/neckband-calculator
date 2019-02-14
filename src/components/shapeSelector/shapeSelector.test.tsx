import React from 'react';
import { ShapeSelector } from './shapeSelector';
import { shallow } from 'enzyme';

describe('ShapeSelector Component', () => {
    it('should render two buttons', () => {
        const onShapeChange = jest.fn(shape => undefined);

        const wrapper = shallow(
            <ShapeSelector
                selectedShape="circle"
                onShapeChange={onShapeChange}
            />,
        );

        expect(wrapper.find('.button').length).toEqual(2);
    });

    it('should mark the button for the selectedShape as selected', () => {
        const onShapeChange = jest.fn(shape => undefined);

        const wrapper = shallow(
            <ShapeSelector
                selectedShape="ellipse"
                onShapeChange={onShapeChange}
            />,
        );

        expect(wrapper.find(`#ellipse`).prop('data-selected')).toEqual(true);

        expect(wrapper.find(`#circle`).prop('data-selected')).toEqual(false);
    });

    it('should call onShapeChange when clicking a button', () => {
        const onShapeChange = jest.fn(shape => undefined);

        const wrapper = shallow(
            <ShapeSelector
                selectedShape="circle"
                onShapeChange={onShapeChange}
            />,
        );

        wrapper.find(`#ellipse`).simulate('click');

        expect(onShapeChange).toHaveBeenCalledTimes(1);
        expect(onShapeChange).toHaveBeenCalledWith('ellipse');
    });

    it('should not call onShapeChange when the button is selected', () => {
        const onShapeChange = jest.fn(shape => undefined);

        const wrapper = shallow(
            <ShapeSelector
                selectedShape="ellipse"
                onShapeChange={onShapeChange}
            />,
        );

        wrapper.find(`#ellipse`).simulate('click');

        expect(onShapeChange).toHaveBeenCalledTimes(0);
    });
});
