import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Input } from './input';
import { describe, it, specs } from '../../../.storybook/facade';
import { shallow } from 'enzyme';
import expect from 'expect';

const styles = require('../../assets/storybook-theme.module.scss');

storiesOf('Input', module)
    .addDecorator(story => <div className={styles.theme}>{story()}</div>)
    .add('with text', () => (
        <Input
            label="A Label"
            onValueChange={action('value change')}
        />
    ))
    .add('with knobs', () => (
        <Input
            label={text('Label', 'A Label')}
            onValueChange={action('value change')}
        />
    ))
    .add('with specs', () => {
        const story = (
            <Input
                label="A Label"
                onValueChange={action('value change')}
            />
        );

        specs(() => describe('Input/with specs', () => {
            it('should render a label', () => {
                const wrapper = shallow(story);

                expect(wrapper.find('label').text()).toEqual('A Label');
            });

            it('should render a number input', () => {
                const wrapper = shallow(story);

                expect(wrapper.find('input[type="number"]').length).toEqual(1);
            });

            it('should render units', () => {
                const wrapper = shallow(story);

                expect(wrapper.find('span').text()).toEqual('cm');
            });
        }));

        return story;
    });
