import React from 'react';
import renderer from 'react-test-renderer';
import { Result } from './result';

describe('Result Component', () => {
    it('renders null if the length is not defined', () => {
        const tree = renderer
            .create(<Result />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders a <p> with a sentence including the length rounded to one digit after the period', () => {
        const tree = renderer
            .create(<Result length={Math.PI} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
