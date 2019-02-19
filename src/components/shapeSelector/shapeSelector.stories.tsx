import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { ShapeSelector } from './shapeSelector';
import { describe, it, specs } from '../../../.storybook/facade';
import { shallow } from 'enzyme';
import expect from 'expect';

const themeStyles = require('../../assets/storybook-theme.module.scss');
const componentStyles = require('./shapeSelector.module.scss');

const shapeOptions = {
    Circle: 'circle',
    Ellipse: 'ellipse',
};

storiesOf('Shape Selector', module)
    .addDecorator(story => <div className={themeStyles.theme}>{story()}</div>)
    .add('with circle selected', () => {
        const story = (
            <ShapeSelector
                selectedShape={shapeOptions.Circle}
                onShapeChange={action('shape change')}
            />
        );

        specs(() => describe('Shape Selector/with circle selected', () => {
            it('should render a label', () => {
                const wrapper = shallow(story);

                expect(wrapper.find('label').text()).toEqual('Shape');
            });

            it('should render two buttons', () => {
                const wrapper = shallow(story);

                expect(wrapper.find(`.${componentStyles.button}`).length).toEqual(2);
            });

            it('should mark the circle button as selected', () => {
                const wrapper = shallow(story);

                expect(wrapper.find(`#${componentStyles.ellipse}`).prop('data-selected')).toEqual(false);

                expect(wrapper.find(`#${componentStyles.circle}`).prop('data-selected')).toEqual(true);
            });
        }));

        return story;
    })
    .add('with ellipse selected', () => {
        const story = (
            <ShapeSelector
                selectedShape={shapeOptions.Ellipse}
                onShapeChange={action('shape change')}
            />
        );

        specs(() => describe('Shape Selector/with circle selected', () => {
            it('should render a label', () => {
                const wrapper = shallow(story);

                expect(wrapper.find('label').text()).toEqual('Shape');
            });

            it('should render two buttons', () => {
                const wrapper = shallow(story);

                expect(wrapper.find(`.${componentStyles.button}`).length).toEqual(2);
            });

            it('should mark the ellipse button as selected', () => {
                const wrapper = shallow(story);

                expect(wrapper.find(`#${componentStyles.ellipse}`).prop('data-selected')).toEqual(true);

                expect(wrapper.find(`#${componentStyles.circle}`).prop('data-selected')).toEqual(false);
            });
        }));

        return story;
    });
