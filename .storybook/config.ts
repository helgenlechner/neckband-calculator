import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import requireContext from 'require-context.macro';
import { withTheme } from './withTheme';

// automatically import all files ending in *.stories.tsx
configure(requireContext('../src', true, /\.stories\.tsx$/), module);

addDecorator(withKnobs);
addDecorator(withTheme);
